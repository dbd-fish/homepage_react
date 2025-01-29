import { Form } from "react-router";

export default function ResetPasswordForm() {
  return (
    <Form method="post" className="space-y-6">

      {/* 新しいパスワード入力フィールド */}
      <div>
        <label
          htmlFor="newPassword"
          className="block text-sm font-medium text-gray-700"
        >
          新しいパスワード
        </label>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          required
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      {/* 新しいパスワード確認用フィールド */}
      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700"
        >
          新しいパスワード（確認用）
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      {/* パスワードリセットボタン */}
      <div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          パスワードをリセット
        </button>
      </div>
    </Form>
  );
}
