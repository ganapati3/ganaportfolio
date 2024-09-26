import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit,reset] = useForm("mblrvbkd");
    if (state.succeeded) {
        setTimeout(() => {
            reset()
        }, 1000);
        return <p>Thanks for joining!</p>;
    }

  return (
    <div className="flex flex-col px-6 py-4 text-left whitespace-pre-line gap-5 lg:px-20    ">
      <h1 className=" text-left text-2xl font-bold mb-5">Contact Form</h1>
        <form onSubmit={handleSubmit} className=" gap-y-4 flex flex-col justify-center">
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                <label htmlFor="name" className="block text-sm font-medium ">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className={`mt-1 block w-full p-2 border rounded-md bg-inherit`}
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                />
                </div>
                <div>
                <label htmlFor="email" className="block text-sm font-medium ">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className={`mt-1 block w-full p-2 border rounded-md bg-inherit`}
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
                </div>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium ">Message</label>
                <textarea
                    id="message"
                    name="message"
                    className={`mt-1 block w-full p-2 border rounded-md h-28 resize-none bg-inherit`}
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
            </div>
            <button
                disabled={state.submitting}
                type="submit"
                  className={`self-start flex items-center justify-center h-10 w-40 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-bold`}
              >
                  {state.submitting ? 
                  <svg className="animate-spin h-5 w-5 mr-3 border-4 border-neutral-600 rounded-full border-t-white" viewBox="0 0 24 24"></svg>
                  : <span>Send Message</span>}
            </button>

        </form>
    </div>
  );
};

export default Contact;
