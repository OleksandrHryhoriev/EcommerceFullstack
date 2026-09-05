export function convertInputType<T>(input: string): T {
   const num = Number(input);
   const result = isNaN(num) ? input : num;
   return result as T;
}
