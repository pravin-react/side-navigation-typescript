import {
    AiFillCaretDown,
    AiFillCaretUp,
    AiOutlineHistory,
    AiOutlineHome,
    AiOutlineMoneyCollect,
    AiOutlineUser,AiOutlineFolder,
    AiOutlineFolderAdd,AiOutlineFileImage
} from 'react-icons/ai';
import { FaCog, FaOpencart } from 'react-icons/fa';
import { SidebarItem } from './TypesInterface';

export const SidebarData: SidebarItem[] = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <AiOutlineHome />,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />,
        subNav: [
            {
                title: 'Pages',
                path: '/overview/pages',
                icon: <AiOutlineUser />
            },
            {
                title: 'Posts',
                path: '/overview/posts',
                icon: <AiOutlineMoneyCollect />
            }
        ]
    },
    {
        title: 'Media',
        path: '/media',
        icon: <AiOutlineFileImage />
    },
    {
        title: 'Products',
        path: '/products',
        icon: <AiOutlineFolder />,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />,
        subNav: [
            {
                title: 'Add Product',
                path: '/products/add-new',
                icon: <AiOutlineFolderAdd />
            },
            {
                title: 'Collections',
                path: '/products/collections',
                icon: <AiOutlineFolderAdd />
            },
            {
                title: 'Categories',
                path: '/products/category',
                icon: <AiOutlineFolder />,
                iconClosed: <AiFillCaretDown />,
                iconOpened: <AiFillCaretUp />,
                subNavMenus: [
                    {
                        title: 'Digital Products',
                        path: '/products/category/digital',
                        icon: <AiOutlineFolderAdd />
                    },
                    {
                        title: 'Physical Products',
                        path: '/products/category/physical',
                        icon: <AiOutlineFolder />
                    },
                    {
                        title: 'Variable Products',
                        path: '/products/category/variable',
                        icon: <AiOutlineFolder />
                    }
                ]
            },
            {
                title: 'Tags',
                path: '/products/tags',
                icon: <AiOutlineFolderAdd />
            },
        ]
    },
    {
        title: 'Orders',
        path: '/orders',
        icon: <FaOpencart />
    },
    {
        title: 'Users',
        path: '/users',
        icon: <AiOutlineUser />
    }
];