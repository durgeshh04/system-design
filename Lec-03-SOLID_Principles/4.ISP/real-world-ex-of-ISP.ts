// Creating post
// Commenting post
// Sharing post

// Users ==>> Admin, Regular-User
// Responsibilities:
// Admin: Able to perform all three operations
// Regular-User: Able to perform only commenting and sharing operation.

interface Post {
  title: string;
  description: string;
}

interface PostComment {
  content: string;
}

interface CreatingPost {
  createPost(post: Post): void;
}

interface CommentingPost {
  commentPost(comment: PostComment): void;
}

interface SharingPost {
  sharePost(): void;
}

class AdminOperations implements CreatingPost, CommentingPost, SharingPost {
  createPost(post: Post): void {
    console.log(
      `Post created successfully: ${post.title} || ${post.description}`
    );
  }

  commentPost(comment: PostComment): void {
    console.log(`Admin commented on the post: ${comment.content}`);
  }

  sharePost(): void {
    console.log(`Admin shared post`);
  }
}

class UserOperations implements CommentingPost, SharingPost {
  commentPost(comment: PostComment): void {
    console.log(`User commented on a post: ${comment.content}`);
  }

  sharePost(): void {
    console.log("User shared the post");
  }
}

const admin = new AdminOperations();
admin.createPost({
  title: "Hello, World",
  description: "This is a post about greeting to the world.",
});
admin.commentPost({ content: "1'st comment on the post.." });
admin.sharePost();

const user = new UserOperations();
user.commentPost({
  content: "Wow! suberb admin this is very nice post I've seen in my life.",
});
user.sharePost();
