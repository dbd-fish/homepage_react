import { ActionFunction, redirect, Link } from 'react-router';
import { useActionData } from 'react-router';
import LoginForm from '~/features/auth_user/components/LoginForm';
import { fetchLoginData } from '~/features/auth_user/apis/fetchLoginData';
import SiteTitle from '~/commons/components/SiteTitle'; // サイトタイトル用のコンポーネントをインポート
import {
  getAllowedSymbols,
  isPasswordValid,
} from '~/features/auth_user/passwordValidation';

// import logger from '~/commons/utils/logger';

/**
 * ログインアクション関数:
 * - フォームから送信されたメールアドレスとパスワードを使用して認証を試行。
 * - パスワードチェックをサーバーサイドで実施。
 * - 認証成功時: トークンをCookieに設定してリダイレクト。
 * - 認証失敗時: エラーメッセージを返す。
 */
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    // パスワードバリデーション
    const allowedSymbols = getAllowedSymbols(); // 許可された記号を取得
    if (!isPasswordValid(password)) {
      return new Response(
        JSON.stringify({
          error: `パスワードが無効です。\n条件を満たしていません。\n\n・ 8文字以上\n・ 大文字・小文字\n・ 数字\n・ 次の記号のいずれかを含む必要があります:\n\t${allowedSymbols}`,
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }

    // fetchLoginDataを呼び出して認証トークンを取得
    const response = await fetchLoginData(email, password);
    // NOTE: バックエンドのレスポンスヘッダーからCookieを取得する場合、get('Cookie')では取得できない
    const responseCookieHeader = response.headers.get('set-Cookie');
    // console.log('[Login Action] Response Cookie header', {
    //   responseCookieHeader: responseCookieHeader,
    // });
    if (!responseCookieHeader) {
      throw new Error('Cookieが見つかりません');
    }

    return redirect('/mypage', {
      headers: {
        'Set-Cookie': responseCookieHeader,
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    // logger.error('[Login Action] Error occurred', {
    //   error: error
    // });

    return new Response(JSON.stringify({ error: 'ログインに失敗しました' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  } finally {
    // logger.info('[Login Action] end');
  }
};

/**
 * ログインページ:
 * - フォームを表示し、認証を行う。
 * - 認証失敗時にはエラーメッセージを表示。
 */
export default function LoginPage() {
  const actionData = useActionData<{ error?: string }>();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          <SiteTitle />
        </h1>
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          ログイン
        </h1>
        {actionData?.error && (
          <div
            id="error-message"
            className="mb-4 text-sm text-red-500 border border-red-400 bg-red-100 px-4 py-2 rounded whitespace-pre-wrap"
            style={{ whiteSpace: 'pre-wrap' }}
          >
            {actionData.error}
          </div>
        )}
        {/* LoginFormコンポーネントを利用 */}
        <LoginForm />
        <div className="mt-6 text-center">
          <Link
            to="/send-reset-password-email"
            className="text-blue-600 hover:underline text-sm block"
          >
            パスワードを忘れた場合はこちら
          </Link>
          <Link
            to="/signup"
            className="text-blue-600 hover:underline text-sm block mt-2"
          >
            新規会員登録はこちら
          </Link>
        </div>
      </div>
    </div>
  );
}
