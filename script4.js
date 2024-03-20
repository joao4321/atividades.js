function Pessoa() {
    var nome;
    var sobrenome;
    var email;
    var data_nascimento;
  
    this.setNome = function(vNome) {
      this.nome = vNome;
    }
    this.getNome = function() {
      return this.nome;
    }
    this.setSobrenome = function(vSobrenome) {
      this.sobrenome = vSobrenome;
    }
    this.getSobrenome = function() {
      return this.sobrenome;
    }
    this.setEmail = function(vEmail) {
      this.email = vEmail;
    }
    this.getEmail = function() {
      return this.email;
    }
    this.setDataNascimento = function(vData) {
      this.data_nascimento = vData;
    }
    this.getDataNascimento = function() {
      return this.data_nascimento;
    }
    this.nomeCompleto = function() {
      return this.nome + " " + this.sobrenome;
    }
  }
  
  // Define a classe Aluno
  function Aluno() {
    // Chama o método pai
    Pessoa.call(this);
    this.curso;
  }
  
  // Define a classe Professor
  function Professor() {
    // Chama o método pai
    Pessoa.call(this);
    this.area_atuacao;
    this.link_lattes;
  }
