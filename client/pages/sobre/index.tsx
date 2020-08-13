import React from 'react';
import { Row } from 'react-bootstrap';
import * as S from '../../styles/sobre-style';
import axios from '../../lib/axios';
import showdown from 'showdown';

import Layout from '../../components/Layout';
export default function Sobre({ sobre, equipes }) {
  let converter = new showdown.Converter(),
    htmlDescricao = converter.makeHtml(sobre.descricao);
  return (
    <Layout>
      <S.WrapperText
        className="justify-content-md-center"
        dangerouslySetInnerHTML={{ __html: htmlDescricao }}
      />
      <S.WrapperTimes>
        <h1>Colaboradores</h1>
        {equipes.map((equipe) => (
          <>
            <h2>{equipe.nome}</h2>
            <S.Equipes>
              {equipe.colaboradores.map((colaborador) => (
                <S.Colaborador>
                  <img
                    loading="lazy"
                    src={
                      'https://api.manualdovestibulando.digital' +
                      colaborador.imagem.url
                    }
                  />
                  <h4>{colaborador.nome}</h4>
                </S.Colaborador>
              ))}
            </S.Equipes>
          </>
        ))}
      </S.WrapperTimes>
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
