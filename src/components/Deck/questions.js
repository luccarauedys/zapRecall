export let questions = [
  {
    id: 1,
    text: 'O que é JSX?',
    answer: 'O JSX é uma extensão de sintaxe para JavaScript.',
  },
  {
    id: 2,
    text: 'O que é o React?',
    answer: 'Uma biblioteca JavaScript para construção de interfaces.',
  },
  {
    id: 3,
    text: 'Componentes devem iniciar com __?',
    answer: 'Letra maiúscula.',
  },
  {
    id: 4,
    text: 'Podemos colocar __ dentro do JSX. ',
    answer: 'Expressões.',
  },
  {
    id: 5,
    text: 'Como o ReactDOM nos ajuda?',
    answer: 'Interagindo com o DOM para colocar componentes React no mesmo.',
  },
  {
    id: 6,
    text: 'Usamos o npm para __?',
    answer: 'Gerenciar os pacotes necessários e suas dependências.',
  },
  {
    id: 7,
    text: 'Usamos props para __?',
    answer: 'Passar diferentes informações para componentes.',
  },
  {
    id: 8,
    text: 'Usamos estado (state) para __?',
    answer:
      'Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente.',
  },
];

questions = questions.sort(() => Math.random() - 0.5);
