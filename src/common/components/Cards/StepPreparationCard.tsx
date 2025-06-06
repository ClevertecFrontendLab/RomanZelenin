import { Card, CardBody, CardHeader, Image, Stack, Tag, TagLabel, Text } from '@chakra-ui/react';

import { Fallback } from '../Fallback/Fallback';
import { useResource } from '../ResourceContext/ResourceContext';

export const StepPreparationCard = ({
    description,
    step,
    cover,
    isLast,
}: {
    description: string;
    step: number;
    cover?: string | null;
    isLast: boolean;
}) => {
    const { getString } = useResource();
    return (
        <Card direction='row' overflow='clip' flex={1}>
            {cover && (
                <Image
                    objectFit='cover'
                    src={cover}
                    w={{ base: '158px', lg: '346px' }}
                    fallback={<Fallback width={{ base: '158px', lg: '346px' }} height='inherit' />}
                />
            )}
            <Stack spacing={{ base: '12px', lg: '16px' }} flex={1} p={{ base: '8px', lg: '24px' }}>
                <CardHeader p='0px'>
                    <Tag layerStyle={isLast ? 'categoryTag' : 'timerTag'}>
                        <TagLabel textStyle='textSmLh5'>
                            {getString('step')} {step}
                        </TagLabel>
                    </Tag>
                </CardHeader>
                <CardBody p={0}>
                    <Text textStyle='textSmLh5'>{description}</Text>
                </CardBody>
            </Stack>
        </Card>
    );
};
