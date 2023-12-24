export function NewPostForm() {
    return (
        <form>
            <label htmlFor="title">Title</label>
            <input id="title" name="title" type="text" />

            <label htmlFor="content">Content</label>
            <textarea id="content" name="content" />

            <label htmlFor="image">Image URL</label>
            <input id="image" name="image" type="text" />

            <button type="submit" className="btn btn-primary my-2">Create</button>
        </form>
    );
}

