class User {
  constructor(model) {
    this.Model = model;
  }

  getAuthUser(ctx) {
    if (ctx.isAuthenticated()) {
      return ctx.getUser();
    }

    return null;
  }

  getById(ID) {
    return this.Model.findById(ID);
  }

  async signUp(signUpData) {
    if (signUpData.password !== signUpData.passwordConfirmation) {
      throw new Error("Passwords don't match");
    }
    try {
      return await this.Model.create(signUpData);
    } catch (e) {
      if (e.code && e.code === 11000) {
        throw new Error("User with provided email already exists!");
      }

      throw e;
    }
  }
  getAllByKey(key) {
    return this.Model.find({ $text: { $search: key } }).sort({
      startDate: "desc",
    });
  }

  async signIn(signInData, ctx) {
    try {
      const user = await ctx.authenticate(signInData);
      return user;
    } catch (error) {
      return error;
    }
  }

  signOut(ctx) {
    try {
      ctx.logout();
      return true;
    } catch (e) {
      return false;
    }
  }
}

module.exports = User;
