export const fetchSignupData = async (email: string, password: string, username: string) => {
    const apiUrl = process.env.API_URL;
  
    try {
      // サインアップデータをオブジェクトとして構築
      const signupData = {
        email: email.trim(), // 空白を削除
        password: password.trim(),
        username: username.trim(),
      };
  
      // 不要なフィールドのチェック（例: 空文字列）
      Object.keys(signupData).forEach((key) => {
        if (!signupData[key as keyof typeof signupData]) {
          throw new Error(`${key} の値が無効です`);
        }
      });
  
      const response = await fetch(`${apiUrl}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData), // 修正後
      });
  
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || "サインアップに失敗しました");
      }
  
      return response.json();
    } catch (error) {
      console.error("[fetchSignupData] Error:", error);
      throw error;
    }
  };
  