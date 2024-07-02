import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const FAQs = () => {
  const accordionItems = [
    {
      id: 'One',
      title: 'How fast will my requests be delivered?',
      content: 'You can typically expect to receive your tasks within 24 hours. However, please keep in mind that larger tasks demand additional time and attention, the delivery timeframe might extend. Our commitment is to ensure each task receives the necessary dedication for top-notch results.',
    },
    {
        id: 'two',
        title: 'Who will I be working with?',
        content: 'You can typically expect to receive your tasks within 24 hours. However, please keep in mind that larger tasks demand additional time and attention, the delivery timeframe might extend. Our commitment is to ensure each task receives the necessary dedication for top-notch results.',
      },
      {
        id: 'three',
        title: 'What languages do you code in?',
        content: 'You can typically expect to receive your tasks within 24 hours. However, please keep in mind that larger tasks demand additional time and attention, the delivery timeframe might extend. Our commitment is to ensure each task receives the necessary dedication for top-notch results.',
      },
      {
        id: 'four',
        title: 'Why would I not just hire a freelancer?',
        content: 'You can typically expect to receive your tasks within 24 hours. However, please keep in mind that larger tasks demand additional time and attention, the delivery timeframe might extend. Our commitment is to ensure each task receives the necessary dedication for top-notch results.',
      },
      {
        id: 'five',
        title: 'What if I dont have enough requests for the month?',
        content: 'You can typically expect to receive your tasks within 24 hours. However, please keep in mind that larger tasks demand additional time and attention, the delivery timeframe might extend. Our commitment is to ensure each task receives the necessary dedication for top-notch results.',
      },
      {
        id: 'six',
        title: 'What languages do you code in?',
        content: 'You can typically expect to receive your tasks within 24 hours. However, please keep in mind that larger tasks demand additional time and attention, the delivery timeframe might extend. Our commitment is to ensure each task receives the necessary dedication for top-notch results.',
      },
      {
        id: 'seven',
        title: 'Why would I not just hire a freelancer?',
        content: 'You can typically expect to receive your tasks within 24 hours. However, please keep in mind that larger tasks demand additional time and attention, the delivery timeframe might extend. Our commitment is to ensure each task receives the necessary dedication for top-notch results.',
      },
      {
        id: 'eight',
        title: 'How fast will my requests be delivered?',
        content: 'You can typically expect to receive your tasks within 24 hours. However, please keep in mind that larger tasks demand additional time and attention, the delivery timeframe might extend. Our commitment is to ensure each task receives the necessary dedication for top-notch results.',
      },
      {
        id: 'nine',
        title: 'What if I dont have enough requests for the month?',
        content: 'You can typically expect to receive your tasks within 24 hours. However, please keep in mind that larger tasks demand additional time and attention, the delivery timeframe might extend. Our commitment is to ensure each task receives the necessary dedication for top-notch results.',
      },
      {
        id: 'ten',
        title: 'How fast will my requests be delivered?',
        content: 'You can typically expect to receive your tasks within 24 hours. However, please keep in mind that larger tasks demand additional time and attention, the delivery timeframe might extend. Our commitment is to ensure each task receives the necessary dedication for top-notch results.',
      },
  ];

  return (
    <section id='faq'>
      <section id='faq-masking'>
        <div></div>
      </section>
      <div className="container-fluid">
        <div className="col-lg-11 mx-auto">
          <div className="row">
            <div className="col-lg-4">
              <div className="heading">
                <div className="smallheading">
                  <h3>FAQ</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="accordion" id="accordionExample">
                {accordionItems.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading${item.id}`}>
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${item.id}`}
                        aria-expanded={index === 0}
                        aria-controls={`collapse${item.id}`}
                      >
                        {item.title}
                      </button>
                    </h2>
                    <div
                      id={`collapse${item.id}`}
                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                      aria-labelledby={`heading${item.id}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>{item.content}</strong>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
