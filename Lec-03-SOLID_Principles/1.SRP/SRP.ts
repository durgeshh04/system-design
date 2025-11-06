class BlogPost {
  public title: string;
  public description: string;
  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }

  public createPost(title: string, description: string): void {
    this.title = title;
    this.description = description;
  }

  public updatePost(title: string, description: string): void {
    this.title = title;
    this.description = description;
  }

  public deletePost() {
    this.title = "";
    this.description = "";
  }

  // Method related to post display, so it should be in another class
  // public displayPost() {
  //   console.log(`Your posts: ${this.title} || ${this.description}`);
  // }
}

class DisplayPosts {
  constructor(private readonly blogPost: BlogPost) {}

  public displayPost() {
    console.log(
      `Your posts: ${this.blogPost.title} || ${this.blogPost.description}`
    );
  }
}

class DisplayPostsJson {
  constructor(private readonly blogPost: BlogPost) {}

  public displayPost(): object {
    return {
      title: this.blogPost.title,
      description: this.blogPost.description,
    };
  }
}

const blog = new BlogPost(
  "Diwali Vacation",
  "Diwali celebration with family is the best enjoyment.."
);

const display = new DisplayPosts(blog);

display.displayPost();
blog.createPost("Coding is Fun", "Coding is really fun while travelling...");
blog.deletePost();
display.displayPost();
blog.updatePost("Nothing", "Slience is the best revenge..");
display.displayPost();

const displayJson = new DisplayPostsJson(blog);
console.log(displayJson.displayPost());
