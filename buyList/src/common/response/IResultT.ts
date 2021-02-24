export class Result<T> {
  data: T;
  message: string;
  error: string;
  isSuccses: boolean;

  constructor(data: T, message: string, error: string, isSuccess: boolean) {
    this.data = data;
    this.message = message;
    this.error = error;
    this.isSuccses = isSuccess;
  }
}
