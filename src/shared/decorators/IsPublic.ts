import { SetMetadata } from '@nestjs/common';

const IS_PUBLIC_KEY = 'IS_PUBLIC';
const IsPublic = () => SetMetadata(IS_PUBLIC_KEY, true);

export { IS_PUBLIC_KEY, IsPublic };
