type LayoutProps = {
    children: React.ReactNode
}

// posts
type PostPageProps = {
    children: React.ReactNode,
    params: {
        id: string
    }
}

type ArticleMetadata = {
    params: { id: string }
}

type PostType = {
    id: number,
    title: string,
    body: string,
    userId: number,
    tags: string[],
    reactions: number,
    image?: string,
    customClass?: string
}
  
interface DataPropsTypes {
    posts: PostType[] 
}

// navigation
type NavItem = [string, string]

interface NavProps {
    items: NavItem[]
}

// breadcrumbs 
type Breadcrumb = {
    link: string
}

interface BreadcrumbsList {
    items: Breadcrub[]
}

// button
type ButtonLoadMore = {
    children: React.ReactNode;
    className?: string;
    loadMoreHandler?: () => void

}