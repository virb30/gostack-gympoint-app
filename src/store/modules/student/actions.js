export function signIn(id) {
  return {
    type: '@student/SIGN_IN',
    payload: { id },
  };
}
