import React from 'react';
import '../../styles/WatchCard.css';
import { Card, Group, Text, Menu, ActionIcon, Image, SimpleGrid } from '@mantine/core';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PreviewIcon from '@mui/icons-material/Preview';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Avatar, Button } from '@mui/material';
import video from '../../video/sadlove.mp4';
import CardCover from '@mui/joy/CardCover';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import { Share } from '@mui/icons-material';

function WatchCard({data}) {
    return (
        <div className='watchcard'>
            <Card withBorder shadow="sm" radius="md">
                <Card.Section withBorder inheritPadding py="xs">
                    <Group position="apart">
                    <div className='watchcard_info'>
                        <Avatar src='https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80' alt=''/>
                        <Text weight={500} style={{marginLeft:"10px"}}>Kelvin</Text>
                    </div>
                    <Menu withinPortal position="bottom-end" shadow="sm">
                        <Menu.Target>
                        <ActionIcon>
                            <MoreHorizIcon size={16} />
                        </ActionIcon>
                        </Menu.Target>

                        <Menu.Dropdown>
                        <Menu.Item icon={<PreviewIcon size={14} />}>Watch Video</Menu.Item>
                        <Menu.Item icon={<DeleteOutlineIcon size={14} />} color="red">
                            Delete all
                        </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                    </Group>
                </Card.Section>

                <Text mt="sm" color="dimmed" size="sm">
                    <Text component="span" inherit color="blue">
                    200+ images uploaded
                    </Text>{' '}
                    since last visit, review them to select which one should be added to your gallery
                </Text>

                <div style={{
                    display:'flex',
                    justifyContent:'center',
                    marginTop:'10px',
                }}>
                    <Card component="li" sx={{ minWidth: 400, minHeight: 350, flexGrow: 1 }}>
                        <CardCover>
                            <video controls loop progress>
                                <source src={video} type="Video/mp4" />
                            </video>
                        </CardCover>
                    </Card>
                </div>
                <Card>
                    <Button><FavoriteBorderIcon /></Button>
                    <Button><CommentIcon /></Button>
                    <Button><Share /></Button>
                </Card>
            </Card>
        </div>
    )
}

export default WatchCard