const DiscussionForm = (props) => {
  const { Thread } = props;
  return (
    <div class="row">
      <h5 className="text-light">Have your say!</h5>
      <form
        onSubmit={props.handleSubmit}
        noValidate
        className="validated-form"
        encType="multipart/form-data"
      >
        <div>
          <label className="form-label text-light" for="username">
            {" "}
            Enter Name:{" "}
          </label>
          <input
            className=""
            type="text"
            id="username"
            onChange={props.usernameHandler}
            required
          />
        </div>
        <div>
          <label className="form-label text-light" for="comment">
            {" "}
            Enter Comment:{" "}
          </label>
          <input
            className="form-control"
            type="text"
            id="comment"
            onChange={props.commentHandler}
            required
          />
        </div>
        <div>
          <label className="form-label text-light" for="id">
          </label>
          <input
            className=""
            type="text"
            id="id"
            onInput={props.idHandler}
            value={Thread._id}
            readOnly
          />
        </div>
        <button class="button-62"> Submit Comment</button>
      </form>
    </div>
  );
};

export default DiscussionForm;
