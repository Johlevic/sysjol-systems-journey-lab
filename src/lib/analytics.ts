// Google Analytics utility functions

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const initGA = (measurementId: string) => {
  // Create script tag for Google Analytics
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    send_page_view: false, // We'll send page views manually
  });

  // Set default consent to denied
  window.gtag("consent", "default", {
    analytics_storage: "denied",
  });
};

export const trackPageView = (path: string) => {
  if (window.gtag) {
    window.gtag("event", "page_view", {
      page_path: path,
    });
  }
};

export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>,
) => {
  if (window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
};

// Track custom events for SysJoL
export const trackCourseView = (courseName: string) => {
  trackEvent("view_course", {
    course_name: courseName,
  });
};

export const trackCourseEnrollment = (courseName: string) => {
  trackEvent("course_enrollment", {
    course_name: courseName,
  });
};

export const trackNewsletterSignup = (email: string) => {
  trackEvent("newsletter_signup", {
    email_domain: email.split("@")[1], // Only track domain for privacy
  });
};
