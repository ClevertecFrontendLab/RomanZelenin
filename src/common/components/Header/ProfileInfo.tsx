import { Avatar, Box, Flex, VStack } from '@chakra-ui/react';
import { memo } from 'react';

export type Profile = {
    avatar?: string;
    firstName: string;
    lastName: string;
    nickname: string;
    activity: {
        bookmarks: number;
        persons: number;
        likes: number;
    };
};

export const ProfileInfo = memo(({ profile }: { profile: Profile }) => (
    <Flex alignItems='center' px='24px' columnGap='12px'>
        <Avatar src={profile.avatar} boxSize='48px' />
        <VStack spacing={0} alignItems='start'>
            <Box textStyle='profileName'>{`${profile.firstName} ${profile.lastName}`}</Box>
            <Box textStyle='profileNickname'>{profile.nickname}</Box>
        </VStack>
    </Flex>
));
