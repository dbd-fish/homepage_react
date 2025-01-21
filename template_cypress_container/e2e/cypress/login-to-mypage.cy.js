describe('ログインテスト', () => {

  let loginData;
  before(() => {
    // テストデータを読み込む
    cy.fixture('loginData').then((data) => {
      loginData = data;
    });
  });

  it('フォームに正しく入力して送信', () => {
    // ログイン操作
    cy.login(loginData.correctEmail, loginData.correctPassword);
    // マイページ画面に遷移
    cy.url().should('eq', 'https://frontend:5173/mypage');
  });

  it('ホーム画面のサンプルサイトリンクをクリックしてホーム画面に遷移', () => {
    cy.visit('/');

    // サンプルサイトリンクをクリック
    cy.contains('a', 'サンプルサイト').click();

    // ホーム画面に遷移したことを確認
    cy.url().should('eq', 'https://frontend:5173/');
  });

  it('ホーム画面からログアウト画面へ遷移', () => {
    // ログイン操作
    cy.login(loginData.correctEmail, loginData.correctPassword);
    // マイページ画面に遷移
    cy.url().should('eq', 'https://frontend:5173/mypage');

    // ログアウト操作
    cy.logout();
    // ログイン画面に遷移
    cy.wait(3000); // または適切な時間
    cy.get('form#login-form').should('be.visible');
    cy.url().should('eq', 'https://frontend:5173/login');
  });
});