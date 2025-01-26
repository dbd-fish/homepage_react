import { useActionData, redirect, ActionFunction } from 'react-router';
import SignupForm from '~/features/auth_user/components/SignupForm';
import { fetchSignupData } from '~/features/auth_user/apis/fetchSignupData';

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const username = formData.get('username') as string;
  try {
    await fetchSignupData(email, password, username);
    return redirect('/signup-complete');
  } catch {
    return new Response(JSON.stringify({ error: 'サインアップに失敗しました' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export default function SignupPage() {
  const actionData = useActionData<{ error?: string }>();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          サインアップ
        </h1>
        {actionData?.error && (
          <div className="mb-4 text-sm text-red-500 border border-red-400 bg-red-100 px-4 py-2 rounded">
            {actionData.error}
          </div>
        )}
        <SignupForm />
      </div>
    </div>
  );
}
