import { useMutation } from '@tanstack/react-query';
import { telegramService } from './axios';

export const useTelegramCreate = (options = {}) => {  
  return useMutation({
    mutationFn: async (data) => await telegramService.create(data),
    ...options
  });
};