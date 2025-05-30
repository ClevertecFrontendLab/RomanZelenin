import { Button, Input, Stack, SystemStyleObject, Text } from '@chakra-ui/react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { PasswordInput } from '~/common/components/PasswordInput/PasswordInput';

import { RegistrationFormData } from './RegistrationForm';

export const LoginAndPassword = ({
    register,
    errors,
    onClickRegister,
}: {
    onClickRegister: () => void;
    register: UseFormRegister<RegistrationFormData>;
    errors: FieldErrors<RegistrationFormData>;
}) => {
    const handleOnBlur = () => {
        const thisElement = document.getElementById('login') as HTMLInputElement;
        thisElement.value = thisElement.value.trim();
    };

    const inputStyleLogin: SystemStyleObject = {
        bgColor: 'white',
        borderColor: errors.login ? 'red' : 'lime.150',
    };
    const inputStylePassword: SystemStyleObject = {
        bgColor: 'white',
        borderColor: errors.password ? 'red' : 'lime.150',
    };
    const inputStyleConfirmPassword: SystemStyleObject = {
        bgColor: 'white',
        borderColor: errors.confirmPassword ? 'red' : 'lime.150',
    };

    return (
        <>
            <Stack>
                <label htmlFor='login'>
                    <Text textStyle='textMdLh6Normal'>Логин для входа на сайт</Text>
                </label>
                <Stack gap='4px'>
                    <Input
                        data-test-id='login-input'
                        {...register('login')}
                        borderRadius='6px'
                        borderColor={errors.login ? 'red' : 'lime.150'}
                        bgColor='white'
                        _active={inputStyleLogin}
                        _focus={inputStyleLogin}
                        placeholder='Логин'
                        variant='filled'
                        id='login'
                        onBlur={() => handleOnBlur()}
                    />
                    <Text textStyle='textXsLh4Normal' color='blackAlpha.700'>
                        Логин не менее 5 символов, только латиница и !@#$&_+-.
                    </Text>
                </Stack>

                <Text textStyle='textXsLh4Normal' color='red'>
                    {errors.login?.message}
                </Text>
            </Stack>
            <Stack>
                <label htmlFor='password'>
                    <Text textStyle='textMdLh6Normal'>Пароль</Text>
                </label>
                <Stack gap='4px'>
                    <PasswordInput
                        data-test-id='password-input'
                        {...register('password')}
                        borderRadius='6px'
                        borderColor={errors.password ? 'red' : 'lime.150'}
                        bgColor='white'
                        _active={inputStylePassword}
                        _focus={{
                            boxShadow: 'none',
                            ...inputStylePassword,
                        }}
                        placeholder='Пароль'
                        id='password'
                        aria-invalid={errors.password ? 'true' : 'false'}
                    />
                    <Text textStyle='textXsLh4Normal' color='blackAlpha.700'>
                        Пароль не менее 8 символов, с заглавной буквой и цифрой
                    </Text>
                    <Text textStyle='textXsLh4Normal' color='red'>
                        {errors.password?.message}
                    </Text>
                </Stack>
                <label htmlFor='confirmPassword'>
                    <Text textStyle='textMdLh6Normal'>Повторите пароль</Text>
                </label>
                <PasswordInput
                    data-test-id='confirm-password-input'
                    {...register('confirmPassword')}
                    borderRadius='6px'
                    borderColor={errors.confirmPassword ? 'red' : 'lime.150'}
                    bgColor='white'
                    _active={inputStyleConfirmPassword}
                    _focus={{
                        boxShadow: 'none',
                        ...inputStyleConfirmPassword,
                    }}
                    placeholder='Пароль'
                    id='confirmPassword'
                    aria-invalid={errors.confirmPassword ? 'true' : 'false'}
                />
                <Text textStyle='textXsLh4Normal' color='red'>
                    {errors.confirmPassword?.message}
                </Text>
            </Stack>
            <Button
                data-test-id='submit-button'
                onClick={onClickRegister}
                type='submit'
                bgColor='black'
                color='white'
                width='100%'
                mt='24px'
            >
                Зарегистрироваться
            </Button>
        </>
    );
};
