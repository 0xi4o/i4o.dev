import PostCard from './PostCard'
import { Link } from '@remix-run/react'

export default function LatestPosts({ posts }: { posts: any[] }) {
	return (
		<article className='flex flex-col gap-8'>
			<header className='flex w-full flex-row justify-between gap-2'>
				<h2 className='text-xl text-neutral-100'>Latest Posts</h2>
				<Link to='/blog'>See all posts</Link>
			</header>
			{posts.length === 0 && <p>Soon, stay connected 👀...</p>}

			<section className='grid grid-cols-1 gap-4 md:grid-cols-2'>
				{posts.length !== 0 &&
					posts
						.slice(0, 2)
						.map((post) => (
							<PostCard
								key={post.slug}
								publishedAt={post.data.date_published}
								title={post.data.title}
								description={post.data.excerpt}
								slug={post.slug}
							/>
						))}
			</section>
		</article>
	)
}
