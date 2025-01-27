import { Link } from 'react-router';

export default function SignupCompletePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          会員登録が完了しました！
        </h1>
        <p className="text-gray-600 text-center mb-6">
          ご登録ありがとうございます。ログインページからログインしてください。
        </p>
        <div className="text-center">
          <Link
            to="/login"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            ログインページへ
          </Link>
        </div>
      </div>
    </div>
  );
}
