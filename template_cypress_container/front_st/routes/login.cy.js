describe('ログイン画面の単体テスト', () => {

  let loginData;
  before(() => {
    // テストデータを読み込む
    cy.fixture('loginData').then((data) => {
      loginData = data;
    });
  });

  it('フォームに正しく入力して送信', () => {
    cy.login(loginData.correctEmail, loginData.correctPassword);
    // マイページ画面に遷移
    cy.wait(1000); // または適切な時間
    cy.url().should('eq', 'https://frontend:5173/mypage');
  });

  it('誤った情報でログインに失敗する', () => {

    cy.login(loginData.correctEmail, 'Pass+-789456');

    // エラーメッセージを確認
    cy.wait(1000); // または適切な時間
    // cy.get('#error-message') // エラーメッセージのセレクタ
    //   .should('be.visible')
    //   .and('contain', 'ログインに失敗しました');
    cy.contains('ログインに失敗しました');

  });
});