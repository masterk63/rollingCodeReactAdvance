const { gql } = require("@apollo/client");

export const GET_CURSOS = gql`
  query GetCursos {
    cursos {
      id
      nombre
      profesor {
        nombre
        apellido
      }
      comentarios {
        Value
      }
    }
  }
`;

export const CREATE_CURSO = gql`
  mutation CreateCurso($input: createCursoInput) {
    createCurso(input: $input) {
      curso {
        nombre
      }
    }
  }
`;
