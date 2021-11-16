import { BadRequestException, ValidationError, ValidationPipe } from '@nestjs/common';

export const ApiValidationPipe = new ValidationPipe({
    whitelist: true,
    transform: true,
    exceptionFactory: (errors: ValidationError[]): any => {
        const errorsByKey = {};

        errors.forEach((e) => {
            errorsByKey[e.property] = {
                message: Object.values(e.constraints),
            };
        });

        return new BadRequestException({
            errors: errorsByKey,
        });
    },
});
