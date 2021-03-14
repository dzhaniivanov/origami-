import style from './Main.css';
import Post from '../Post/Post'

const Main = ({
    posts
}) => {
    return (
        <main className="main-container">
            <h1>Sooome heading</h1>
            <div className="posts">
            {posts.map(x =>
                <Post
                key={x.id}
                content={x.content}
                author={x.author}
                />
            )}
            </div>
        </main>

    );
}

export default Main