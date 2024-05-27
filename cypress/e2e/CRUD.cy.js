describe('Testando os EndPoints do sequelize', () => {
    it('successfully loads', () => {
    //   cy.request('/api/produto') // change URL to match your dev URL
    cy.request('/')
    .should('have.property', 'status', 200);
    
    it('Deve listar todos os produtos', () => {
      cy.request({
          method: 'GET',
          url: '/ordenar/2'
      }).then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.be.an('array');
      });
    });

    it('Deve criar um novo produto', () => {
      const novoProduto = {
            id:9,
            nome:'Onix 2',
            descricao:'Ö Carro mais vendido do Braisil !',
            desconto: 10.0,
            preco: 15.0,
            categoria:'Carros'
      };

      cy.request({
          method: 'POST',
          url: '/',
          body: novoProduto
      }).then((response) => {
          expect(response.status).to.equal(201);
          expect(response.body).to.have.property('id');
          expect(response.body).to.have.property('nome', novoProduto.nome);
          expect(response.body).to.have.property('descricao', novoProduto.descricao);
          expect(response.body).to.have.property('desconto', novoProduto.desconto);
          expect(response.body).to.have.property('preco', novoProduto.preco);
          expect(response.body).to.have.property('categoria', novoProduto.categoria);
      });
    });

    it('Deve Atualizar um novo produto', () => {
      const novoProduto = {
            id:9,
            nome:'Hilux SW4 UPDATE',
            descricao:'O carro que nao vale seu preco !',
            desconto: 10.0,
            preco: 15.0,
            categoria:'Carros'
      };

      cy.request({
          method: 'PUT',
          url: `/atualizar/${novoProduto.id}`,
          body: novoProduto
      }).then((response) => {
          expect(response.status).to.equal(201);
          expect(response.body).to.have.property('id');
          expect(response.body).to.have.property('nome', novoProduto.nome.includes(UPDATE));
          expect(response.body).to.have.property('descricao', novoProduto.descricao);
          expect(response.body).to.have.property('desconto', novoProduto.desconto);
          expect(response.body).to.have.property('preco', novoProduto.preco);
          expect(response.body).to.have.property('categoria', novoProduto.categoria);
      });
    });

    })
  })