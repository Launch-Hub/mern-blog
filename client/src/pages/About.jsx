export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-bold text-center my-7">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              About Motivir
            </span>
            {/* <span className="text-indigo-500">Abo</span>
            <span className="text-purple-500">ut{' '}Mot</span>
            <span className="text-pink-500">ivir</span> */}
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p className="">
              Welcome to <b>Motivir - A Hub for Sharing and Inspiration!</b>
            </p>
            <p className="">
              I'm Truong Giang Nguyen, also known as Dan Dan, and I created this blog as a personal project to share my
              thoughts and ideas with the world. As a passionate developer, I love writing about technology, coding, and
              everything in between.
            </p>
            <p>
              On this blog, you'll find articles and tutorials on web development, software engineering, and programming
              languages. I'm constantly learning and exploring new technologies, so be sure to check back regularly for
              fresh content!
            </p>
            <p>
              I encourage you to leave comments on our posts and engage with other readers. You can like other people's
              comments and reply to them as well. Together, we can build a supportive community of learners, helping one
              another grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
