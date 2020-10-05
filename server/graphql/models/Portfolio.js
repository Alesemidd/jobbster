class Portfolio {
  constructor(model, user) {
    // this.Model === Portfolio
    this.Model = model;
    this.user = user;
    this.writeRights = ["employer", "admin"];
  }

  getLatest(limit) {
    return this.Model.find({})
      .populate("user")
      .limit(limit)
      .sort({ createdAt: "desc" });
  }

  async getAll({ pageNum = 1, pageSize = 6 }) {
    const skips = pageSize * (pageNum - 1);
    const count = await this.Model.countDocuments();
    const portfolios = await this.Model.find({})
      .skip(skips)
      .limit(pageSize)
      .sort({ createdAt: "desc" });
    return { portfolios, count };
  }

  getAllByUser() {
    return this.Model.find({ user: this.user._id }).sort({ startDate: "desc" });
  }

  getAllByKey(key) {
    return this.Model.find({ $text: { $search: key } }).sort({
      startDate: "desc",
    });
  }

  getById(id) {
    return this.Model.findById(id);
  }

  create(data) {
    if (!this.user || !this.writeRights.includes(this.user.role)) {
      throw new Error("Not Authorised!!!");
    }

    data.user = this.user;
    return this.Model.create(data);
  }

  findAndUpdate(id, data) {
    return this.Model.findOneAndUpdate({ _id: id }, data, {
      new: true,
      runValidators: true,
    });
  }

  findAndDelete(id) {
    return this.Model.findOneAndRemove({ _id: id });
  }
}

module.exports = Portfolio;
