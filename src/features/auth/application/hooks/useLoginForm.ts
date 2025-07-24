import { useState, FormEvent } from 'react';
import { formatError } from '@/shared/utils/formatError';
import { useAuth } from './useAuth';
import { useAuthContext } from '@/app/providers/AuthProvider';

export function useLoginForm() {
  const { login, loading, error } = useAuth();
  const { setExpiredToken, setExpiredRefreshToken } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await login({ email, password });
      setExpiredToken('disabled');
      setExpiredRefreshToken('disabled');
    } catch (err) {
      throw err;
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    loading,
    //error: error ? formatError(error) : null,
  };
}
