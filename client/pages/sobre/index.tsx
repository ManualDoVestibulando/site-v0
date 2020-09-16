import React from 'react';
import { Row, Container } from 'react-bootstrap';
import * as S from '../../styles/sobre-style';
import axios from '../../lib/axios';
import showdown from 'showdown';
import { NextSeo } from 'next-seo';

import Layout from '../../components/Layout';
export default function Sobre({ sobre, equipes }) {
  let converter = new showdown.Converter(),
    htmlDescricao = converter.makeHtml(sobre.descricao);

  const SEO = {
    title: 'Sobre - Manual do Vestibulando',
    description:
      'O Manual do Vestibulando surge da inquietação de diversas estudantes calouros durante seus anos de vestibulandas com ' +
      'a falta de informações sobre como alcançar uma vaga na Universidade de São Paulo. Em um processo tão pouco transparente, aliados ' +
      'aos Centros Acadêmicos (com destaque especial aos centrinhos politécnicos), os estudantes, em iniciativa própria, reuniram a métrica ' +
      'de desempenho dos vestibulares de ingresso (Fuvest e Enem), bem como redações e depoimentos diversos, para democratizar o acesso ' +
      'a esse tipo de informação.',

    openGraph: {
      title: 'Sobre - Manual do Vestibulando',
      description:
        'O Manual do Vestibulando surge da inquietação de diversas estudantes calouros durante seus anos de vestibulandas com ' +
        'a falta de informações sobre como alcançar uma vaga na Universidade de São Paulo. Em um processo tão pouco transparente, aliados ' +
        'aos Centros Acadêmicos (com destaque especial aos centrinhos politécnicos), os estudantes, em iniciativa própria, reuniram a métrica ' +
        'de desempenho dos vestibulares de ingresso (Fuvest e Enem), bem como redações e depoimentos diversos, para democratizar o acesso ' +
        'a esse tipo de informação.',
    },
  };

  return (
    <Layout>
      <NextSeo {...SEO} />
      <S.WrapperText
        className="justify-content-md-center"
        dangerouslySetInnerHTML={{ __html: htmlDescricao }}
      />

      <div className="text-center credito-icones">
        Icons made by{' '}
        <a href="https://www.flaticon.com/authors/surang" title="surang">
          surang
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <style jsx>{`
        .credito-icones {
          background-color: #556270;
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const query = `
        query Querry {
          sobre {
            descricao
          }
          equipes {
            nome
            colaboradores {
              nome
              imagem {
                url
              }
            }
          }
        }
      `;

  const response = await axios.post('/graphql', {
    query,
  });

  return {
    props: response.data.data,
  };
};
