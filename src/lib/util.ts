export function formatCnpj(cnpjStr: string): string {
  return cnpjStr
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
}

export function deepCopy<T extends Record<string, any>>(
  obj: Record<string, any>
): T {
  return JSON.parse(JSON.stringify(obj));
}

export function deleteProps(
  obj: Record<string, any>,
  ...props: string[]
): void {
  props.forEach((prop) => {
    delete obj[prop];
  });
}

export function formatNbMoney(number: number): string {
  let numberForm = number.toFixed(2).replace('.', ',');
  if (numberForm.endsWith('0,00')) {
    numberForm = numberForm.replace('-', '');
  }

  return numberForm;
}

export function checkPropsEquals(
  obj1: Record<string, any>,
  obj2: Record<string, any>
): boolean {
  let isEqual = true;

  Object.keys(obj1).forEach((key) => {
    if (obj1[key] !== obj2[key]) {
      isEqual = false;
    }
  });

  return isEqual;
}
