import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Vila Pet Brasil',
  description: 'Política de Privacidade da Vila Pet Brasil — Pet Shop e Banho & Tosa em Betim, MG.',
  robots: { index: false, follow: false },
};

export default function PoliticaDePrivacidade() {
  return (
    <div
      style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#fafafa', color: '#3D3D3D' }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: '#fff',
          borderBottom: '1px solid #eee',
          padding: '1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          href="/"
          style={{ textDecoration: 'none', color: '#EA528B', fontWeight: 700, fontSize: '1.1rem' }}
        >
          ← Voltar ao site
        </Link>
        <span style={{ color: '#777', fontSize: '0.9rem' }}>Vila Pet Brasil</span>
      </header>

      {/* Content */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 2rem' }}>
        <h1 style={{ color: '#EA528B', fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          Política de Privacidade
        </h1>
        <p style={{ color: '#999', fontSize: '0.9rem', marginBottom: '2.5rem' }}>
          Atualizado em março de 2026
        </p>

        <Section title="Introdução">
          <p>
            A Ldr Produtos e Servicos Para Animais - Vila Pet Brasil LTDA, pessoa jurídica de
            direito privado, com sede na R. Osvaldo Rodrigues Pereira, 540 - Bairro Espírito Santo,
            Betim (CEP: 32671-652) - Minas Gerais, Brasil, inscrita no CNPJ/MF sob o nº
            44.099.078/0001-80, leva a sua privacidade a sério e zela pela segurança e proteção de
            dados de todos os seus clientes, parceiros, fornecedores e usuários do site{' '}
            <a href="https://www.vilapetbrasil.com.br/" style={{ color: '#EA528B' }}>
              https://www.vilapetbrasil.com.br/
            </a>
            .
          </p>
        </Section>

        <Section title="Termos e Condições">
          <p>
            Esta Política de Privacidade destina-se a informá-lo sobre o modo como nós utilizamos e
            divulgamos informações coletadas em suas visitas ao nosso site e em mensagens que
            trocamos com você.
          </p>
          <p style={{ marginTop: '1rem', fontWeight: 600 }}>
            AO ACESSAR O SITE, ENVIAR COMUNICAÇÕES OU FORNECER QUALQUER TIPO DE DADO PESSOAL, VOCÊ
            DECLARA ESTAR CIENTE E DE ACORDO COM ESTA POLÍTICA DE PRIVACIDADE, A QUAL DESCREVE AS
            FINALIDADES E FORMAS DE TRATAMENTO DE SEUS DADOS PESSOAIS QUE VOCÊ DISPONIBILIZAR NO
            SITE.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Esta Política de Privacidade fornece uma visão geral de nossas práticas de privacidade e
            das escolhas que você pode fazer, bem como direitos que você pode exercer em relação aos
            Dados Pessoais tratados por nós. Se você tiver alguma dúvida sobre o uso de Dados
            Pessoais, entre em contato com{' '}
            <a href="mailto:comercial@vilapetbrasil.com" style={{ color: '#EA528B' }}>
              comercial@vilapetbrasil.com
            </a>
            .
          </p>
          <p style={{ marginTop: '1rem' }}>
            Além disso, a Política de Privacidade não se aplica a quaisquer aplicativos, produtos,
            serviços, site ou recursos de mídia social de terceiros que possam ser oferecidos ou
            acessados por meio deste site. Nós não controlamos, endossamos ou fazemos quaisquer
            representações sobre esses sites de terceiros ou suas práticas de privacidade.
            Recomendamos que você revise a política de privacidade de qualquer site com o qual você
            interaja antes de permitir a coleta e o uso de seus Dados Pessoais.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Caso você nos envie Dados Pessoais referentes a outras pessoas físicas, você declara ter
            a competência para fazê-lo e declara ter obtido o consentimento necessário para
            autorizar o uso de tais informações nos termos desta Política de Privacidade.
          </p>
        </Section>

        <Section title="Definições">
          <p>Para os fins desta Política de Privacidade:</p>
          <ul
            style={{
              marginTop: '0.75rem',
              paddingLeft: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <li>
              <strong>&quot;Dados Pessoais&quot;</strong> significa qualquer informação que, direta
              ou indiretamente, identifique ou possa identificar uma pessoa natural, como por
              exemplo, nome, CPF, data de nascimento, endereço IP, dentre outros;
            </li>
            <li>
              <strong>&quot;Dados Pessoais Sensíveis&quot;</strong> significa qualquer informação
              que revele, em relação a uma pessoa natural, origem racial ou ética, convicção
              religiosa, opinião política, filiação a sindicato ou a organização de caráter
              religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado
              genético ou biométrico;
            </li>
            <li>
              <strong>&quot;Tratamento de Dados Pessoais&quot;</strong> significa qualquer operação
              efetuada no âmbito dos Dados Pessoais, por meio de meios automáticos ou não, tal como
              a recolha, gravação, organização, estruturação, armazenamento, adaptação ou alteração,
              recuperação, consulta, utilização, divulgação por transmissão, disseminação ou,
              alternativamente, disponibilização, harmonização ou associação, restrição, eliminação
              ou destruição;
            </li>
            <li>
              <strong>&quot;Leis de Proteção de Dados&quot;</strong> significa todas as disposições
              legais que regulem o Tratamento de Dados Pessoais, incluindo, porém sem se limitar, a
              Lei nº 13.709/18, Lei Geral de Proteção de Dados Pessoais (LGPD).
            </li>
          </ul>
        </Section>

        <Section title="Uso de Dados Pessoais">
          <p>
            Coletamos e usamos Dados Pessoais para gerenciar seu relacionamento conosco e melhor
            atendê-lo quando você estiver adquirindo produtos e/ou serviços no site, personalizando
            e melhorando sua experiência. Exemplos de como usamos os dados incluem:
          </p>
          <ul
            style={{
              marginTop: '0.75rem',
              paddingLeft: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <li>Viabilizar que você adquira produtos e/ou serviços no site;</li>
            <li>Para confirmar ou corrigir as informações que temos sobre você;</li>
            <li>Para enviar informações que acreditamos ser do seu interesse;</li>
            <li>Para personalizar sua experiência de uso do site;</li>
            <li>
              Para personalizar o envio de publicidades para você, baseada em seu interesse em nosso
              site;
            </li>
            <li>
              Para entrarmos em contato por um número de telefone e/ou endereço de e-mail fornecido,
              nos termos da lei e para fins comerciais razoáveis.
            </li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            Além disso, os Dados Pessoais fornecidos também podem ser utilizados na forma que
            julgarmos necessária ou adequada: (a) nos termos das Leis de Proteção de Dados; (b) para
            atender exigências de processo judicial; (c) para cumprir decisão judicial, decisão
            regulatória ou decisão de autoridades competentes; (d) para proteger nossas operações;
            (e) para proteger direitos, privacidade, segurança nossos, seus ou de terceiros; (f)
            para detectar e prevenir fraude; (g) de outros modos permitidos por lei.
          </p>
          <p style={{ marginTop: '1rem', fontWeight: 600 }}>
            O NOSSO SITE NÃO SE DESTINA A PESSOAS COM MENOS DE 18 (DEZOITO) ANOS E PEDIMOS QUE TAIS
            PESSOAS NÃO NOS FORNEÇAM QUALQUER DADO PESSOAL.
          </p>
        </Section>

        <Section title="Não Fornecimento de Dados Pessoais">
          <p>
            Você não é obrigado a compartilhar os Dados Pessoais que solicitamos, no entanto, se
            você optar por não os compartilhar, em alguns casos, não poderemos fornecer a você
            acesso completo ao site, alguns recursos especializados ou ser capaz de prestar a
            assistência necessária ou, ainda, viabilizar a entrega do produto ou prestar o serviço
            contratado por você.
          </p>
        </Section>

        <Section title="Dados Coletados">
          <p>
            O público em geral poderá navegar no site sem necessidade de qualquer cadastro e envio
            de Dados Pessoais. No contato à nossa equipe, nós podemos coletar:
          </p>
          <ul
            style={{
              marginTop: '0.75rem',
              paddingLeft: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <li>
              Dados de contato: nome, sobrenome, número de telefone, cidade, Estado e endereço de
              e-mail;
            </li>
            <li>
              Informações que você envia via formulário (dúvidas, reclamações, sugestões, críticas,
              elogios etc.).
            </li>
          </ul>
          <p style={{ marginTop: '1rem' }}>Na navegação geral no site, nós poderemos coletar:</p>
          <ul
            style={{
              marginTop: '0.75rem',
              paddingLeft: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <li>Dados de geolocalização quando você acessa o site;</li>
            <li>
              Informações sobre suas preferências e interesses em relação aos produtos/serviços;
            </li>
            <li>
              Dados de navegação no site, incluindo conteúdo visualizado, informações sobre o
              navegador e o dispositivo, endereço IP e localização;
            </li>
            <li>Dados anônimos ou agregados sobre como o site é usufruído.</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            Ao menos que você informe em algum formulário livre preenchido por você, nós não
            coletamos Dados Pessoais Sensíveis.
          </p>
        </Section>

        <Section title="Compartilhamento de Dados Pessoais com Terceiros">
          <p>Nós poderemos compartilhar seus Dados Pessoais:</p>
          <ul
            style={{
              marginTop: '0.75rem',
              paddingLeft: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <li>
              Com provedores de serviços ou parceiros para gerenciar ou suportar certos aspectos de
              nossas operações comerciais em nosso nome;
            </li>
            <li>Com terceiros, com o objetivo de nos ajudar a gerenciar o site;</li>
            <li>
              Com terceiros, caso ocorra qualquer reorganização, fusão, venda, joint venture,
              cessão, transmissão ou transferência de toda ou parte da nossa empresa, ativo ou
              capital.
            </li>
          </ul>
        </Section>

        <Section title="Transferências Internacionais de Dados">
          <p>
            Dados Pessoais e informações de outras naturezas coletadas por nós podem ser
            transferidos ou acessados por entidades pertencentes ao grupo corporativo das empresas
            parceiras em todo o mundo de acordo com esta Política de Privacidade.
          </p>
        </Section>

        <Section title="Forma de Coleta Automática de Dados Pessoais">
          <p>
            Quando você visita o site, ela pode armazenar ou recuperar informações em seu navegador,
            seja na forma de cookies e de outras tecnologias semelhantes. Nós e nossos prestadores
            de serviços terceirizados podemos coletar seus Dados Pessoais de diversas formas,
            incluindo:
          </p>
          <ul
            style={{
              marginTop: '0.75rem',
              paddingLeft: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <li>
              <strong>Por meio do navegador ou do dispositivo:</strong> tipo de computador,
              resolução da tela, nome e versão do sistema operacional, modelo e fabricante do
              dispositivo, idioma, tipo e versão do navegador de Internet;
            </li>
            <li>
              <strong>Uso de cookies:</strong> tipo de navegador, tempo dispendido no site, páginas
              visitadas, preferências de idioma e outros dados de tráfego anônimos;
            </li>
            <li>
              <strong>Uso de pixel tags e outras tecnologias similares:</strong> para rastrear ações
              de usuários do site, medir o sucesso das nossas campanhas de marketing e coletar dados
              estatísticos sobre o uso do site.
            </li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            Caso não deseje que suas informações sejam coletadas por meio de cookies, você pode
            configurar os cookies no menu &quot;opções&quot; ou &quot;preferências&quot; do seu
            browser.
          </p>
        </Section>

        <Section title="Direitos do Usuário">
          <p>
            Você pode, a qualquer momento, requerer: (i) confirmação de que seus Dados Pessoais
            estão sendo tratados; (ii) acesso aos seus Dados Pessoais; (iii) correções a dados
            incompletos, inexatos ou desatualizados; (iv) anonimização, bloqueio ou eliminação de
            dados desnecessários; (v) portabilidade de Dados Pessoais a outro prestador de serviços;
            (vi) eliminação de Dados Pessoais tratados com seu consentimento; (vii) informações
            sobre as entidades às quais seus Dados Pessoais tenham sido compartilhados; (viii)
            revogação do consentimento.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Os seus pedidos serão tratados com especial cuidado de forma a que possamos assegurar a
            eficácia dos seus direitos. Poderá lhe ser pedido que faça prova da sua identidade de
            modo a assegurar que a partilha dos Dados Pessoais é apenas feita com o seu titular.
          </p>
        </Section>

        <Section title="Segurança dos Dados Pessoais">
          <p>
            Buscamos adotar as medidas técnicas e organizacionais previstas pelas Leis de Proteção
            de Dados adequadas para proteção dos Dados Pessoais na nossa organização. Infelizmente,
            nenhuma transmissão ou sistema de armazenamento de dados tem a garantia de serem 100%
            seguros. Caso tenha motivos para acreditar que sua interação conosco tenha deixado de
            ser segura, favor nos notificar imediatamente.
          </p>
        </Section>

        <Section title="Links de Hipertexto para Outros Sites e Redes Sociais">
          <p>
            O site poderá, de tempos a tempos, conter links de hipertexto que redirecionará você
            para sites das redes dos nossos parceiros, anunciantes, fornecedores etc. Nós não somos
            responsáveis pelas políticas de privacidade desses sites. Recomendamos que você revise a
            política de privacidade de cada site visitado.
          </p>
        </Section>

        <Section title="Atualizações desta Política de Privacidade">
          <p>
            Se modificarmos nossa Política de Privacidade, publicaremos o novo texto no site, com a
            data de revisão atualizada. Podemos alterar esta Política de Privacidade a qualquer
            momento. Sua utilização do site após as alterações significa que aceitou as Políticas de
            Privacidade revisadas.
          </p>
        </Section>

        <Section title="Pessoa Responsável pelo Tratamento dos Dados Pessoais">
          <p>
            Caso pretenda exercer qualquer um dos direitos previstos nesta Política de Privacidade
            e/ou nas Leis de Proteção de Dados, ou resolver quaisquer dúvidas relacionadas ao
            Tratamento de seus Dados Pessoais, favor contatar-nos através do e-mail{' '}
            <a href="mailto:comercial@vilapetbrasil.com.br" style={{ color: '#EA528B' }}>
              comercial@vilapetbrasil.com.br
            </a>
            .
          </p>
        </Section>
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#3E3089',
          color: '#fff',
          padding: '2rem',
          textAlign: 'center',
          fontSize: '0.9rem',
        }}
      >
        <p>© {new Date().getFullYear()} Vila Pet Brasil — CNPJ 44.099.078/0001-80</p>
        <p style={{ marginTop: '0.5rem', color: 'rgba(255,255,255,0.7)' }}>
          Rua Osvaldo Rodrigues Pereira, 540 — Bairro Espírito Santo — Betim, MG
        </p>
      </footer>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '2.5rem' }}>
      <h2
        style={{
          color: '#EA528B',
          fontSize: '1.15rem',
          fontWeight: 700,
          marginBottom: '0.75rem',
          paddingBottom: '0.4rem',
          borderBottom: '2px solid #fce4ef',
        }}
      >
        {title}
      </h2>
      <div style={{ lineHeight: '1.75', color: '#444', fontSize: '0.95rem' }}>{children}</div>
    </section>
  );
}
