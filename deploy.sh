#!/usr/bin/env bash
# Deploy script para upra-site -> VPS Hetzner.
#
# Uso (na pasta upra-site):
#   bash deploy.sh
#
# O que faz:
#   1. Tar do codigo local (sem node_modules, .next, .git, .env.local)
#   2. Envia para a VPS via SSH
#   3. Build da imagem Docker na VPS
#   4. Recria container (zero downtime quase, ~5s)
#   5. Caddy mantem SSL e routing.

set -euo pipefail

VPS_USER="upra"
VPS_HOST="91.98.72.101"
VPS_PATH="/opt/upra/clientes/upra-site"
WEB3FORMS_KEY="63c7554a-3d74-445c-9827-d34253e0c5e5"

echo "==> 1/4 Enviar codigo para VPS..."
tar -czf - \
  --exclude=node_modules \
  --exclude=.next \
  --exclude=.git \
  --exclude=.env.local \
  --exclude=.vercel \
  --exclude=deploy.sh \
  . | ssh "$VPS_USER@$VPS_HOST" "
    rm -rf $VPS_PATH/* $VPS_PATH/.[!.]* 2>/dev/null || true
    cd $VPS_PATH
    tar -xzf -
"
echo "    -> codigo enviado."

echo "==> 2/4 Build da imagem Docker na VPS..."
ssh "$VPS_USER@$VPS_HOST" "
  cd $VPS_PATH
  docker build \
    --build-arg NEXT_PUBLIC_WEB3FORMS_KEY=$WEB3FORMS_KEY \
    -t upra-site:latest . 2>&1 | tail -5
"
echo "    -> imagem construida."

echo "==> 3/4 Recriar container..."
ssh "$VPS_USER@$VPS_HOST" "
  cd /opt/upra/stack
  docker compose -f docker-compose.yml -f docker-compose.clientes.yml up -d --force-recreate upra-site
"

echo "==> 4/4 Verificar saude..."
sleep 6
STATUS=$(ssh "$VPS_USER@$VPS_HOST" "docker exec upra-caddy curl -s -o /dev/null -w '%{http_code}' http://upra-site:3000/" || echo "ERRO")

if [[ "$STATUS" == "200" ]]; then
  echo "    -> ✓ container saudavel (HTTP 200)"
  echo ""
  echo "✓ Deploy concluido. https://upra.pt esta atualizado."
else
  echo "    -> ✗ container respondeu HTTP $STATUS"
  echo ""
  echo "ATENCAO: deploy completou mas o site nao responde 200."
  echo "Verifica logs: ssh $VPS_USER@$VPS_HOST 'docker logs upra-site --tail 30'"
  exit 1
fi
