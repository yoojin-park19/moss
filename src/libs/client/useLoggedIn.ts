import useSWR from 'swr';

export default function useLoggedIn() {
  const { data, error } = useSWR('/api/users/profile');
  return {
    loggedIn: data?.ok,
    user: data?.profile,
    username: data?.profile?.username,
    loading: !data && !error,
  };
}
