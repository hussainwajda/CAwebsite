// src/components/ServiceRouter.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import TaxAuditPage from '@/components/services/taxAudit'; 
import InternalAuditPage from '@/components/services/internalAudit';
import StatutoryAuditPage from '@/components/services/statutoryService';
import GSTAuditPage from '@/components/services/gstAudit';
import ServicesCarousel from '@/components/home/services';
import GSTReturnFilingCompliances from '@/components/services/gstReturn';
import IncomeTaxReturnFilingCompliances from '@/components/services/taxReturn';
import ScurnityAssessmentPage from '@/components/services/scurnityAssessment';
import SEO from '@/components/SEO';
// import RERACompliances from './services/RERACompliances';

const ServiceRouter: React.FC = () => {
  const { serviceName } = useParams<{ serviceName: string }>();

  if (serviceName === undefined) {
    return (
      <>
        <SEO
          title='Our Services | VP Khambe & Associates'
          description='Explore our full range of services including tax filing, auditing, GST compliance, business setup, and more.'
          keywords='Chartered Accountant Services in Pune, CA near me, Best CA in Pune, VP Khambe & Associates, CA Vinay Khambe'
          canonical='https://cavinaykhambe.in/services'
        />
        <ServicesCarousel />
      </>
    );
  }

  // Map URL parameter to component
  const serviceComponents: { [key: string]: React.FC } = {
    'income-tax-audit': TaxAuditPage,
    'internal-audit': InternalAuditPage,
    'statutory-audit': StatutoryAuditPage,
    'gst-audit': GSTAuditPage,
    'gst-return-filing-compliances': GSTReturnFilingCompliances,
    'income-tax-return-filing-compliances': IncomeTaxReturnFilingCompliances,
    'scrutiny-assessment-appeals': ScurnityAssessmentPage
  };

  const ComponentToRender = serviceComponents[serviceName? serviceName : ''];

  if (ComponentToRender) {
    return <ComponentToRender />;
  } else {
    return(
      <>
      <SEO
        title='Service not found'
        description='The service you are looking for is not available.'
      />
        <div className='text-center mt-10 mb-10 '>
          <h1>Service not found</h1>
          <p>The service you are looking for is not available.</p>
        </div>
        <ServicesCarousel />
      </>
    ) 
  }
};

export default ServiceRouter;