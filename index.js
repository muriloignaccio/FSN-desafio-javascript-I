// Base a ser utilizada
const alunosDaEscola = [{
  nome: "Henrique",
  notas: [],
  cursos: [],
  faltas: 5
}, {
  nome: "Edson",
  notas: [],
  cursos: [],
  faltas: 2
}, {
  nome: "Bruno",
  notas: [10, 9.8, 9.6],
  cursos: [],
  faltas: 0
}, {
  nome: "Guilherme",
  notas: [10, 9.8, 9.6],
  cursos: [{
    nomeDoCurso: "Full Stack",
    dataMatricula: new Date
  }],
  faltas: 0
}, {
  nome: "Carlos",
  notas: [],
  cursos: [],
  faltas: 0
}, {
  nome: "Lucca",
  notas: [10, 9.8, 9.6],
  cursos: [{
    nomeDoCurso: "UX",
    dataMatricula: new Date
  }],
  faltas: 0
}];


// implementação

const adicionarAluno = nomeAluno => {
  const novoAluno = {
    nome: nomeAluno,
    notas: [],
    cursos: [],
    faltas: 0
  };
  alunosDaEscola.push(novoAluno);
  console.log("Aluno adicionado com sucesso!");
};

const buscarAluno = nomeAluno => {
  const aluno = alunosDaEscola.find(aluno => aluno.nome === nomeAluno);
  if (aluno) {
    console.log("Aluno encontrado!");
    return aluno;
  }
  console.log("Aluno não encontrado!");
};

const formatarData = data => {
  const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  return `${data.getDate()} de ${meses[data.getMonth()]} de ${data.getFullYear()}`;
};

const listarCursos = aluno => {
  let cursos = "";
  for (let curso of aluno.cursos) {
    cursos += `
      Nome do Curso: ${curso.nomeDoCurso}
      Data da Matricula: ${formatarData(curso.dataMatricula)}`;
  };
  return cursos;
};

const verificarMatricula = aluno => aluno.cursos;

const listarAlunos = () => {
  for (let aluno of alunosDaEscola) {
    console.log(`
    Nome: ${aluno.nome}
    Notas: ${aluno.notas.length == 0 ? "Sem notas!" : aluno.notas}
    Cursos: ${aluno.cursos.length == 0 ? "Sem cursos!" : listarCursos(aluno)}
    Faltas: ${aluno.faltas}
    `);
  };
};

const matricularAluno = (aluno, nomeCurso) => {
  const alunoCadastrado = buscarAluno(aluno.nome);
  if (alunoCadastrado) {
    const novoCurso = {
      nomeDoCurso: nomeCurso,
      dataMatricula: new Date
    };
    aluno.cursos.push(novoCurso);
    console.log(`${aluno.nome} matriculado no curso ${nomeCurso} com sucesso!`);
  };
};

const aplicarFalta = aluno => {
  if (aluno.cursos.length != 0 && buscarAluno(aluno.nome)) {
    aluno.faltas++;
    console.log("Falta adicionada com sucesso!");
  } else {
    console.log("Aluno não está matriculado em nenhum curso!");
  };
};

const aplicarNota = (aluno, nota) => {
  if (aluno.cursos.length != 0 && buscarAluno(aluno.nome)) {
    aluno.notas.push(nota);
    console.log("Nota adicionada com sucesso!");
  } else {
    console.log("Aluno não está matriculado em nenhum curso!");
  };
};

const aprovarAluno = aluno => {
  if (aluno.notas.length != 0 && buscarAluno(aluno.nome)) {
    const total = aluno.notas.reduce((total, nota) => total + nota);
    const media = total / aluno.notas.length;
    if (aluno.faltas <= 3 && media >= 7) {
      console.log(`${aluno.nome} foi aprovado!`);
    } else {
      console.log("Notas insuficientes e/ou faltas superiores ao critério de aprovação!");
    };
  } else {
    console.log("Aluno não encontrado ou não possui notas!");
  };
};

listarAlunos();