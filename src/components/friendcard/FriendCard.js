import { Card, Group, Image, Text } from '@mantine/core';
import React from 'react';
import '../../styles/FriendCard.css';
import img1 from "../../image/img1.png";

function FriendCard({img, name, props}) {
    return (
        <div className='friendcard' {...props}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
                <Card.Section>
                    <Image
                    src={img}
                    height={160}
                    alt="Norway"
                    />
                </Card.Section>
                <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>{name}</Text>
                </Group>
                <button className='button fc-button'>
                    Follow
                </button>
            </Card>
        </div>
    )
}

export default FriendCard