export const paths = {
  home: {
    getHref: () => "/",
    section: {
      about: {
        getHref: () => "/#about",
      },
      experience: {
        getHref: () => "/#experience",
      },
      project: {
        getHref: () => "/#project",
      },
      contact: {
        getHref: () => "/#contact",
      },
    },
  },
  public: {
    blog: {
      getHref: () => "/blog",
    },
  },
  external: {
    linkedin: {
      getHref: () => "https://www.linkedin.com/in/ravint-kosol-a0b6aa389/",
    },
    github: {
      getHref: () => "https://github.com/mxilia",
    },
  },
};
