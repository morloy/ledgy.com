// @flow

import React, { type Node } from 'react';
import { Trans } from '@lingui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Accordion, AccordionItem } from '../Accordion';
import SignupForm from '../SignupForm';

const getQuestions = (props: Props) => [
  {
    slug: 'why-use-these-templates',
    question: <Trans>Why use these templates?</Trans>,
    answer: (
      <Trans>
        Currently, setting up an employee participation plan costs thousands to set up. With the
        help of these templates and guides you can finalize it for a fraction of the time and cost.
      </Trans>
    )
  },
  {
    slug: 'keep-track-of-plans-and-grants',
    question: <Trans>How can I keep track of the created plan and grants?</Trans>,
    answer: (
      <Trans>
        Create a pool and add the grants directly in Ledgy. Ledgy will then keep track of the
        vesting schedule for you and send you notifications for important events (cliff, vesting,
        expiry).
      </Trans>
    )
  },
  {
    slug: 'country-laws',
    question: <Trans>Are these participation plans legal and correct in my country?</Trans>,
    answer: (
      <>
        <Trans>
          These high quality templates are made in partnership with the best and most experienced
          law firms in Europe. The templates are here to guide you through all of the steps
          necessary to set up your employee participation plan. On top of that, they serve as an
          educational tool, helping you familiarize yourself with the terminology and provisions of
          participation plans.
        </Trans>
        <br />
        <br />
        <Trans>- Our German law partners: Taylor Wessing, Baker Tilly</Trans>
        <br />
        <Trans>- Our Swiss law partners: Kellerhals Carrard, Wenger Vieli, Lexr</Trans>
      </>
    )
  },
  {
    slug: 'next-countries',
    question: <Trans>When can I have a template for my country?</Trans>,
    answer: (
      <>
        <Trans>
          We are looking forward to expanding these templates across Europe. Sign up for our
          newsletter, so you’ll be the first to know when we launch in your country
        </Trans>{' '}
        <span role="img" aria-label="rocketship">
          🚀
        </span>
        <br />
        <div className="d-flex justify-content-center my-5">
          {/* <Modal
            id="psop-newsletter-signup"
            titleClassNames="text-white"
            title={<Trans>Sign up for the Ledgy newsletter</Trans>}
            buttonText={
              <>
                <FontAwesomeIcon
                  className="newsletter-icon mr-2"
                  icon={faEnvelope}
                  title="Newsletter"
                />
                <Trans>Subscribe</Trans>
              </>
            }
            hideFooter
          >
            <p className="text-dark my-3">
              <Trans>
                Receive important feature updates, exclusive webinar invitations, and
                promotions/offers.
              </Trans>
              <br />
              <br />
              <Trans>
                Plus, you will be at the top of the list for announcements about new employee
                participation plan templates.
              </Trans>
            </p>
            <SignupForm {...props} trackingEvent="newsletter" />
          </Modal> */}
        </div>
      </>
    )
  }
];

export const TemplateFAQs = (props: Props): Node => {
  const accordionItems = getQuestions(props).map(({ slug, question, answer }) => (
    <AccordionItem id={slug} key={slug} title={question}>
      {answer}
    </AccordionItem>
  ));

  return (
    <div className="row-small mx-auto my-6">
      <h2 className="text-center">
        <Trans>FAQs</Trans>
      </h2>
      <Accordion>{accordionItems}</Accordion>
    </div>
  );
};
