import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos e Condições",
  description:
    "Termos e condições de prestação de serviços da UPRA Marketing — criação de websites, lojas online e landing pages para PMEs portuguesas.",
  alternates: { canonical: "https://upra.pt/termos" },
};

const SECTIONS = [
  {
    id: "identificacao",
    title: "1. Identificação",
    body: `
      <p>Os presentes Termos e Condições regem a prestação de serviços por parte de:</p>
      <ul>
        <li><strong>Nome comercial:</strong> UPRA Marketing</li>
        <li><strong>Titular:</strong> João Pedro Muchacho Ferreira</li>
        <li><strong>Forma jurídica:</strong> Empresário em Nome Individual</li>
        <li><strong>NIF:</strong> 276 230 469</li>
        <li><strong>Sede:</strong> Marinha Grande, Portugal</li>
        <li><strong>Email:</strong> geral@upramarketing.pt</li>
        <li><strong>Website:</strong> https://upra.pt</li>
      </ul>
      <p>Doravante designada como <strong>"UPRA"</strong>.</p>
    `,
  },
  {
    id: "aceitacao",
    title: "2. Aceitação dos termos",
    body: `
      <p>A contratação de qualquer serviço prestado pela UPRA implica a aceitação integral e sem reservas dos presentes Termos e Condições, comunicada por escrito através de email, WhatsApp ou outro meio digital, no momento da aceitação do orçamento ou pagamento do sinal.</p>
      <p>Estes Termos e Condições aplicam-se em complemento ao orçamento específico de cada projeto, prevalecendo as disposições particulares deste último em caso de divergência.</p>
    `,
  },
  {
    id: "servicos",
    title: "3. Descrição dos serviços",
    body: `
      <p>A UPRA presta serviços de criação e manutenção de presença digital, nomeadamente:</p>
      <ul>
        <li><strong>Landing Pages</strong> — páginas únicas de conversão</li>
        <li><strong>Sites Institucionais</strong> — sites multi-página para apresentação de negócios</li>
        <li><strong>Lojas Online</strong> — sites com catálogo de produtos, carrinho e checkout</li>
        <li><strong>Plano Mensal de Manutenção</strong> — gestão de hosting, domínio, SSL, atualizações e suporte</li>
        <li><strong>Design e Identidade Visual</strong> — logotipos, paletas e tipografia à medida</li>
      </ul>
      <p>Cada serviço é orçamentado individualmente. Os preços indicados em <a href="/precos">https://upra.pt/precos</a> são valores "a partir de" e podem variar consoante a complexidade do projeto.</p>
    `,
  },
  {
    id: "pagamentos",
    title: "4. Pagamentos e faturação",
    body: `
      <p><strong>Condições de pagamento padrão:</strong></p>
      <ul>
        <li><strong>50% de sinal</strong> no momento de aceitação do orçamento, antes do início dos trabalhos</li>
        <li><strong>50% restante</strong> contra entrega final, antes da publicação online (go-live)</li>
      </ul>
      <p><strong>Métodos de pagamento aceites:</strong></p>
      <ul>
        <li>MB Way</li>
        <li>Transferência bancária (IBAN comunicado em fatura)</li>
      </ul>
      <p><strong>Faturação:</strong> a UPRA emite recibo verde eletrónico através do Portal das Finanças, no regime de isenção de IVA ao abrigo do artigo 53.º do CIVA.</p>
      <p><strong>Atrasos:</strong> em caso de atraso superior a 7 dias úteis após emissão de fatura, a UPRA reserva-se o direito de suspender a execução do projeto até regularização do pagamento, sem prejuízo dos prazos contratualizados.</p>
    `,
  },
  {
    id: "prazos",
    title: "5. Prazos de execução e atrasos por parte do cliente",
    body: `
      <p>Os prazos indicados em cada orçamento são vinculativos para a UPRA <strong>desde que o cliente cumpra as obrigações de fornecimento de conteúdos</strong> previstas neste artigo.</p>
      <p><strong>Conteúdos a fornecer pelo cliente:</strong> textos, imagens, fotografias, logos, dados de contacto, acessos a serviços externos (redes sociais, ferramentas) e quaisquer outros elementos solicitados pela UPRA para a execução do projeto.</p>
      <p><strong>Prazo de entrega:</strong> o cliente dispõe de <strong>14 dias úteis</strong> após o pagamento do sinal para entregar a totalidade dos conteúdos necessários.</p>
      <p><strong>Consequências do incumprimento:</strong></p>
      <ul>
        <li>O projeto é colocado em pausa por iniciativa da UPRA</li>
        <li>Os prazos contratualizados são suspensos e recomeçam a contar a partir da data efetiva de entrega de todos os conteúdos</li>
        <li>O sinal pago <strong>não é reembolsável</strong></li>
        <li>Após 90 dias consecutivos sem entrega de conteúdos, a UPRA pode considerar o projeto cancelado nos termos do artigo 9.</li>
      </ul>
    `,
  },
  {
    id: "revisoes",
    title: "6. Revisões e alterações",
    body: `
      <p>Cada projeto inclui <strong>2 (duas) rondas de revisão gratuitas</strong> após a primeira entrega, destinadas a ajustes de conteúdo, cor, tipografia, layout ou funcionalidades menores.</p>
      <p>A partir da terceira ronda de revisão, ou para alterações que extrapolem o âmbito do orçamento original (novas páginas, novas funcionalidades, redesign), aplica-se um valor de <strong>€40/hora</strong> ou orçamento adicional, mediante acordo prévio.</p>
      <p>Considera-se "ronda de revisão" a entrega de uma lista única e consolidada de alterações por parte do cliente. Pedidos fragmentados em múltiplas mensagens podem contar como rondas separadas, a critério da UPRA.</p>
    `,
  },
  {
    id: "propriedade-intelectual",
    title: "7. Propriedade intelectual",
    body: `
      <p><strong>Durante a execução do projeto:</strong> todos os elementos produzidos pela UPRA (código, design, identidade visual) permanecem propriedade exclusiva da UPRA até ao pagamento total do projeto.</p>
      <p><strong>Após pagamento integral:</strong> os direitos de utilização do código, design final e identidade visual transferem-se para o cliente, em regime de licença não-exclusiva e ilimitada para utilização no domínio acordado.</p>
      <p><strong>Excecões:</strong> bibliotecas open-source, frameworks de terceiros (Next.js, React, etc.), tipografias licenciadas e ícones de bibliotecas públicas mantêm as respetivas licenças originais e não são transferidos exclusivamente.</p>
      <p><strong>Conteúdos do cliente:</strong> textos, imagens, logos e demais materiais fornecidos pelo cliente permanecem propriedade exclusiva do cliente. O cliente garante que detém os direitos de utilização desses conteúdos e responsabiliza-se por qualquer reclamação de terceiros relativa a direitos de autor, marcas registadas ou direitos de imagem.</p>
    `,
  },
  {
    id: "cancelamento",
    title: "8. Cancelamento do projeto",
    body: `
      <p><strong>Cancelamento por iniciativa do cliente após início dos trabalhos:</strong></p>
      <ul>
        <li>O sinal de 50% pago <strong>não é reembolsável</strong></li>
        <li>A UPRA entrega ao cliente o trabalho realizado até à data de cancelamento (ficheiros de design e código)</li>
        <li>O cliente <strong>não fica autorizado a publicar ou utilizar comercialmente</strong> o trabalho enquanto não pagar a totalidade do orçamento</li>
        <li>Se o cliente pretender recuperar e finalizar o projeto posteriormente, novo orçamento será apresentado</li>
      </ul>
      <p><strong>Cancelamento por iniciativa da UPRA:</strong> a UPRA pode cancelar unilateralmente o projeto em caso de:</p>
      <ul>
        <li>Incumprimento grave por parte do cliente (não-pagamento, conduta abusiva, conteúdos ilegais)</li>
        <li>Impossibilidade técnica devidamente justificada</li>
      </ul>
      <p>Em caso de cancelamento por iniciativa da UPRA não imputável ao cliente, o sinal será integralmente reembolsado no prazo de 30 dias.</p>
    `,
  },
  {
    id: "plano-mensal",
    title: "9. Plano mensal de manutenção",
    body: `
      <p>O cliente pode optar pelo Plano Mensal de Manutenção UPRA, que inclui hosting, domínio, certificado SSL, atualizações de segurança, backups automáticos e suporte contínuo, mediante pagamento mensal.</p>
      <p><strong>Adesão:</strong> opcional, contratada em separado ou em conjunto com a criação do site.</p>
      <p><strong>Faturação:</strong> mensal, recibo verde emitido no início de cada mês.</p>
      <p><strong>Cancelamento:</strong></p>
      <ul>
        <li>Cliente pode cancelar a qualquer momento com <strong>30 dias de aviso prévio</strong>, comunicado por escrito (email ou WhatsApp)</li>
        <li>No mês em que ocorre o cancelamento, a mensalidade é paga integralmente</li>
        <li>A partir do mês seguinte, o cliente assume a gestão do hosting e domínio (ou solicita à UPRA a migração mediante orçamento)</li>
      </ul>
      <p><strong>Suspensão por incumprimento:</strong> se o cliente atrasar mais de 30 dias a mensalidade, a UPRA pode suspender o serviço e remover o site do hosting até regularização.</p>
    `,
  },
  {
    id: "garantia",
    title: "10. Garantia e suporte pós-entrega",
    body: `
      <p>Após a publicação online (go-live) do projeto, a UPRA garante <strong>30 dias de suporte gratuito</strong> destinado a:</p>
      <ul>
        <li>Correção de erros (bugs) atribuíveis ao trabalho da UPRA</li>
        <li>Esclarecimento de dúvidas sobre a utilização do painel de gestão</li>
        <li>Pequenos ajustes de texto ou imagem (até 1 hora de trabalho cumulativo)</li>
      </ul>
      <p>O suporte pós-entrega <strong>não inclui</strong>:</p>
      <ul>
        <li>Novas funcionalidades</li>
        <li>Redesign ou alteração estrutural</li>
        <li>Migração para outro hosting</li>
        <li>Resolução de problemas causados por intervenções de terceiros no site</li>
      </ul>
      <p>Após os 30 dias de suporte gratuito, o cliente pode contratar suporte avulso (€40/hora) ou aderir ao Plano Mensal de Manutenção.</p>
    `,
  },
  {
    id: "responsabilidade",
    title: "11. Limitação de responsabilidade",
    body: `
      <p>A UPRA <strong>não se responsabiliza</strong> por:</p>
      <ul>
        <li>Conteúdos fornecidos pelo cliente que infrinjam direitos de autor, marcas, direitos de imagem ou outras normas legais</li>
        <li>Quebras de serviço de plataformas externas utilizadas no projeto (Vercel, Hetzner, Web3Forms, Google, Meta, etc.) ou suas consequências</li>
        <li>Atrasos provocados por terceiros (serviços de DNS, registo de domínios, prestadores de pagamento, etc.)</li>
        <li>Perdas de receita, lucros cessantes ou outros danos indiretos resultantes da indisponibilidade temporária do site</li>
        <li>Alterações ou avarias resultantes de intervenções no site por parte do cliente ou de terceiros não autorizados</li>
        <li>Decisões comerciais ou de marketing tomadas pelo cliente com base no site</li>
      </ul>
      <p>A responsabilidade total da UPRA, em qualquer circunstância, está limitada ao valor efetivamente pago pelo cliente pelo serviço em causa.</p>
    `,
  },
  {
    id: "privacidade",
    title: "12. Privacidade e proteção de dados",
    body: `
      <p>O tratamento de dados pessoais por parte da UPRA, no âmbito da utilização do website e da prestação de serviços, é regulado pela <a href="/politica-privacidade">Política de Privacidade</a>, parte integrante destes Termos e Condições.</p>
      <p>O cliente compromete-se a fornecer informação verdadeira e atualizada e a comunicar quaisquer alterações relevantes (NIF, morada, dados de pagamento) à UPRA em tempo útil.</p>
    `,
  },
  {
    id: "portfolio",
    title: "13. Portfólio e direitos de exibição",
    body: `
      <p>Salvo acordo expresso em contrário, a UPRA fica autorizada a:</p>
      <ul>
        <li>Apresentar o trabalho realizado para o cliente no seu portfólio (https://upra.pt/trabalho)</li>
        <li>Utilizar capturas de ecrã (screenshots) do site para fins de divulgação comercial</li>
        <li>Mencionar o nome e o logotipo do cliente em casos de estudo, redes sociais e materiais comerciais</li>
        <li>Referir o projeto em propostas comerciais a futuros clientes</li>
      </ul>
      <p>O cliente pode opor-se a esta utilização desde que o comunique por escrito com justificação razoável (acordos de confidencialidade, restrições contratuais, etc.) — caso em que a UPRA respeitará a restrição.</p>
    `,
  },
  {
    id: "alteracoes",
    title: "14. Alterações aos termos",
    body: `
      <p>A UPRA reserva-se o direito de atualizar os presentes Termos e Condições a qualquer momento, refletindo alterações legais, comerciais ou técnicas.</p>
      <p>As alterações entram em vigor a partir da sua publicação em https://upra.pt/termos. Para clientes com projetos em curso ou Plano Mensal ativo, as alterações relevantes serão comunicadas por email ou WhatsApp com pelo menos 15 dias de antecedência.</p>
      <p>A continuação da utilização dos serviços após a comunicação implica a aceitação tácita das alterações.</p>
    `,
  },
  {
    id: "lei-foro",
    title: "15. Lei aplicável e foro",
    body: `
      <p>Os presentes Termos e Condições regem-se pela <strong>lei portuguesa</strong>.</p>
      <p>Para a resolução de qualquer litígio emergente da interpretação ou execução do presente contrato, as partes elegem como competente o <strong>Tribunal Judicial da Comarca de Leiria</strong>, com expressa renúncia a qualquer outro.</p>
      <p>Em alternativa ao recurso à via judicial, as partes podem optar por mecanismos de resolução alternativa de litígios, designadamente o <a href="https://www.consumidor.gov.pt/parceiros/centros-de-arbitragem-de-conflitos-de-consumo.aspx" target="_blank" rel="noopener noreferrer">Centro de Arbitragem de Conflitos de Consumo</a> da respetiva área geográfica.</p>
    `,
  },
  {
    id: "contactos",
    title: "16. Contactos",
    body: `
      <p>Para qualquer questão relacionada com estes Termos e Condições, contacte:</p>
      <ul>
        <li><strong>Email:</strong> geral@upramarketing.pt</li>
        <li><strong>Website:</strong> <a href="https://upra.pt">https://upra.pt</a></li>
      </ul>
    `,
  },
];

const LAST_UPDATED = "29 de abril de 2026";

export default function TermosPage() {
  return (
    <>
      {/* HERO */}
      <section className="px-5 sm:px-6 lg:px-10 pt-10 lg:pt-24 pb-12 lg:pb-16">
        <div className="mx-auto max-w-[900px]">
          <div className="label mb-8">Termos e Condições</div>
          <h1
            className="display-tight text-[clamp(36px,6vw,80px)] tracking-tight"
            style={{ lineHeight: 1.1 }}
          >
            Regras claras{" "}
            <span className="text-blue">para ambos os lados.</span>
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-ink/80 leading-relaxed max-w-2xl">
            Estes termos regulam a prestação de serviços pela UPRA Marketing.
            Ao contratar um serviço ou aceitar um orçamento, está a aceitar
            estas condições.
          </p>
          <div className="mt-6 font-mono text-xs text-mute uppercase tracking-widest">
            Última atualização: {LAST_UPDATED}
          </div>
        </div>
      </section>

      {/* SECÇÕES */}
      <section className="border-t border-rule px-5 sm:px-6 lg:px-10 py-16 lg:py-24 bg-bg-soft">
        <div className="mx-auto max-w-[900px]">
          <div className="bg-bg-bright border border-rule rounded-2xl p-7 sm:p-10 lg:p-14">
            <article className="prose-upra">
              {SECTIONS.map((s) => (
                <section key={s.id} id={s.id} className="scroll-mt-8">
                  <h2>{s.title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: s.body }} />
                </section>
              ))}
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
