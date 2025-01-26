import { useActionData, redirect, ActionFunction } from 'react-router';
import ResetPasswordForm from '~/features/auth_user/components/ResetPasswordForm';
import { fetchResetPasswordData } from '~/features/auth_user/apis/fetchResetPasswordData';

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const newPassword = formData.get('newPassword') as string;

  try {
    await fetchResetPasswordData(email, newPassword);
    return redirect('/reset-password-complete');
  } catch {
    return new Response(JSON.stringify({ error: 'パスワードリセットに失敗しました' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export default function ResetPasswordPage() {
  const actionData = useActionData<{ error?: string }>();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          パスワードリセット
        </h1>
        {actionData?.error && (
          <div className="mb-4 text-sm text-red-500 border border-red-400 bg-red-100 px-4 py-2 rounded">
            {actionData.error}
          </div>
        )}
        <ResetPasswordForm />
      </div>
    </div>
  );
}
