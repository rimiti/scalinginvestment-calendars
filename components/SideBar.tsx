import React, { ReactNode } from 'react';
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    useDisclosure,
    BoxProps,
    FlexProps, Text, Badge, Center,
} from '@chakra-ui/react';
import {
    FiHome,
    FiMenu,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import Image from 'next/image'

interface LinkItemProps {
    name: string;
    icon: IconType;
    subMenus?: {
        name: string;
        badge: string;
        path: string;
    }[]
}
const LinkItems: Array<LinkItemProps> = [
    { name: 'Ozoir-la-Ferrière', icon: FiHome, subMenus: [
            { name: 'Studio F2', badge: 'RDC', path: '/ozoir-la-ferriere/rdc/studio-f2' },
            { name: 'T2', badge: 'RDC', path: '/ozoir-la-ferriere/rdc/t2' },
            { name: 'T3 Duplex', badge: 'RDC', path: '/ozoir-la-ferriere/rdc/t3-duplex' },
            { name: 'Appartement 2D', badge: '2 E', path: '/ozoir-la-ferriere/etage-2/appartement-droite/' },
        ]
    },
];

export default function SideBar({ children }: { children: ReactNode }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} p="2">
                {children}
            </Box>
        </Box>
    );
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="6" justifyContent="space-between">
                <Image src="/images/logo-dark.png" alt="Scaling Investment" width={250} height={38} />
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((menu, index) => (
                <Flex
                    key={index}
                    align="center"
                    p="2"
                    mx="2"
                    display={"row"}
                >
                    <Text fontSize={"16px"}>
                        <Icon
                            mr="2"
                            fontSize="16"
                            as={menu.icon}
                        />
                        {menu.name}
                    </Text>
                    {menu.subMenus?.map((subMenu) => (
                        <NavItem key={subMenu.name} path={subMenu.path}>
                            <Text fontSize={"14px"}>
                                <Badge mr={2}>{subMenu.badge}</Badge> {subMenu.name}
                            </Text>
                        </NavItem>
                    ))}
                </Flex>
            ))}
        </Box>
    );
};

interface NavItemProps extends FlexProps {
    path: string;
    children: ReactNode;
}
const NavItem = ({ children, path, ...rest }: NavItemProps) => {
    return (
        <Link href={path} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                m='4'
                role="group"
                cursor="pointer"
                {...rest}>
                {children}
            </Flex>
        </Link>
    );
};

interface MobileProps extends FlexProps {
    onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            height="16"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent="flex-start"
            {...rest}>
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                mr='10'
                icon={<FiMenu />}
            />
        </Flex>
    );
};
