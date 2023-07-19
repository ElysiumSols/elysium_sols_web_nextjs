// React Import
import React, { Fragment } from "react";

// Components Import
import LoadScreen from "@/Components/UI/Loading/Loading";

// Styles Import
import SectionHeading from "@/Components/UI/SectionHeading/SectionHeading";

const CompanyPolicy = ({ siteloading }) => {
  return (
    <Fragment>
      {siteloading && <LoadScreen />}
      <div className="w-full flex flex-col relative">
        <div className="flex-initial"></div>
        <div className={`flex lg:max-w-6xl md:justify-center pt-28`}>
          {" "}
          <SectionHeading
            backGroundColor="text-color-black-reduce"
            foreGroundColor="text-color-black"
          >
            Company Policy
          </SectionHeading>
        </div>

        <div className="flex flex-col mt-10">
          <div className="mb-5 px-3.5">
            <h2 className="font-semibold mb-3 text-center text-lg underline">
              EMPLOYEE RECORDS
            </h2>
            <p className="md:px-20">
              If there will be any change in personal record of any employee
              i.e., name, address, phone number, email address, bank account
              etc. it needs to be immediately informed.
            </p>
          </div>

          <div className="mb-5 px-3.5">
            <h2 className="font-semibold mb-3 text-center text-lg underline">
              LEAVE AND HOLIDAYS
            </h2>
            <div className="md:px-20">
              <h2 className="font-semibold mt-1 uppercase italic text-sm">
                Monthly Paid Leave:
              </h2>
              <p className="md:px-20 mb-2">
                Only one paid leave is allowed. If not availed, it will be
                encashed.{" "}
              </p>
              <h2 className="font-semibold mt-1 uppercase italic text-sm">
                Monthly Extra Leaves:
              </h2>
              <p className="md:px-20 mb-2">
                All extra leaves will result in salary deduction.{" "}
              </p>
              <h2 className="font-semibold mt-1 uppercase italic text-sm">
                Sandwich Rule:
              </h2>
              <p className="md:px-20 mb-2">
                If an official off is “sandwiched between” the days for which
                you have applied leave, it is counted as a leave too.{" "}
              </p>
              <h2 className="font-semibold mt-1 uppercase italic text-sm">
                Half-day Leaves:
              </h2>
              <p className="md:px-20 mb-2">
                Leave for half day can also be attained and will be counted as
                half working day and half leave.{" "}
              </p>
              <h2 className="font-semibold mt-1 uppercase italic text-sm">
                Public Holidays:
              </h2>
              <p className="md:px-20 mb-2">
                For any public, religious, government holidays, no day(s) should
                be considered off, unless announced.
              </p>
            </div>
          </div>
          <div className="mb-5 px-3.5">
            <div className="text-xs-center  col-md-12">
              <h2 className="font-semibold mb-3 text-center text-lg underline">
                UNINFORMED ABSENCE POLICY
              </h2>
              <div className="md:px-20">
                <p className="mb-2">
                  All leaves should be pre-approved by the concerned manager.
                </p>
                <h2 className="font-semibold mt-1 uppercase italic text-sm">
                  Remote Work Policy:
                </h2>
                <p className="md:px-20 mb-2">
                  30% salary deduction will be imposed in case of work from home
                  (this is not applicable in case of work from home entitled by
                  the company).
                  <br />
                  Office timing should be followed even in case of work from
                  home.
                </p>
                <h2 className="font-semibold mt-1 uppercase italic text-sm">
                  Extra Working Days:
                </h2>
                <p className="md:px-20 mb-2">
                  In case of working day on official holiday(s), 150% of the
                  salary will be paid.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-5 px-3.5">
            <div className="text-xs-center  col-md-12">
              <h2 className="font-semibold mb-3 text-center text-lg underline">
                CELL PHONE AND MEDIA POLICY
              </h2>
              <p className="md:px-20">
                Excessive use of mobile phone and social media will result in
                warnings and eventually penalties.
              </p>
            </div>
          </div>
          <div className="mb-5 px-3.5">
            <div className="text-xs-center  col-md-12">
              <h2 className="font-semibold mb-3 text-center text-lg underline">
                GENERAL RULES AND REGULATION OF THE COMPANY
              </h2>
              <div className="md:px-20">
                <ul className="list-decimal list-inside mb-3">
                  {" "}
                  <li className="md:px-10 mb-1">
                    Misuse of company property (physical assets, logins /
                    accounts, storages, servers, etc.) is prohibited.
                  </li>
                  <li className="md:px-10 mb-1">
                    All tasks shall be carried out in accordance with your
                    seniors’ direction, coordinator, and/or company heads.{" "}
                  </li>
                  <li className="md:px-10 mb-1">
                    Every Employee shall keep his/her work area neat clean and
                    orderly.
                  </li>
                  <li className="md:px-10 mb-1">
                    Maintain good housekeeping in your work area.{" "}
                  </li>
                  <li className="md:px-10 mb-1">
                    Any act of indiscipline/unprofessional behaviour in the
                    organization cannot be tolerated by the company, the company
                    can terminate without any notice costs or benefits.
                  </li>
                  <li className="md:px-10 mb-1">
                    All employees are expected to be punctual and reach office
                    on time.{" "}
                  </li>
                  <li className="md:px-10 mb-1">
                    Update your manager about your assigned tasks before end of
                    business.{" "}
                  </li>
                  <li className="md:px-10 mb-1">
                    All programs, websites, designs, testing, literature etc.
                    developed by you, while in the company service will at all
                    times be deemed to be sole property of the company. Also,
                    the company will at all times, have the sole proprietary
                    right in any new system which you may develop while in the
                    company&apos;s service.{" "}
                  </li>
                  <li className="md:px-10 mb-1">Unauthorized absence.</li>
                </ul>
                <h2 className="font-semibold mt-1 uppercase italic text-sm">
                  Misconduct:
                </h2>
                <p className="mb-2">
                  Acts/omissions included but not limited to the followings
                  could be considered misconducts of an employee:
                </p>
                <ul className="list-decimal list-inside mb-3">
                  <li className="md:px-10 mb-1">Long term absence.</li>
                  <li className="md:px-10 mb-1">
                    If an employee does not improve his performance once he/she
                    has been notified about the same.
                  </li>
                  <li className="md:px-10 mb-1">
                    Refusal to obey or comply with employer’s or senior’s
                    instructions.
                  </li>
                  <li className="md:px-10 mb-1">An act of theft and fraud.</li>
                  <li className="md:px-10 mb-1">
                    Deliberate and serious damage to property{" "}
                  </li>
                  <li className="md:px-10 mb-1">Persistent lateness</li>
                  <li className="md:px-10 mb-1">
                    Not completing task(s) on time.{" "}
                  </li>
                  <li className="md:px-10 mb-1">Falsifying any information</li>
                  <li className="md:px-10 mb-1">
                    Inappropriate or rude comments to colleagues
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-5 px-3.5">
            <div className="text-xs-center  col-md-12">
              <h2 className="font-semibold mb-3 text-center text-lg underline">
                OFFICE TIMINGS
              </h2>
              <div className="md:px-20">
                <h2 className="font-semibold mt-1 uppercase italic text-sm">
                  Official Working Days:
                </h2>
                <p className="md:px-20 mb-2">Monday to Friday</p>
                <h2 className="font-semibold mt-1 uppercase italic text-sm">
                  Working Hours:
                </h2>
                <ul className="list-decimal list-inside mb-3">
                  {" "}
                  <li className="md:px-10 mb-1">
                    Monday to Thursday: 10:00 AM to 6:00 PM
                  </li>
                  <li className="md:px-10 mb-1">
                    Lunch &amp; prayer break: 1:30 PM to 2:00 PM
                  </li>
                  <li className="md:px-10 mb-1">Friday: 10:00 AM to 6:00 PM</li>
                  <li className="md:px-10 mb-1">
                    Lunch &amp; prayer break: 1:15 PM to 2:15 PM
                  </li>
                </ul>
                <p>
                  {" "}
                  <strong>Note:</strong> These office timings are the general
                  business hours. But the office hours may vary as of job role
                  and offer letter.{/* */}{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="mb-5 px-3.5">
            <div className="text-xs-center  col-md-12">
              <h2 className="font-semibold mb-3 text-center text-lg underline">
                TERMINATION
              </h2>
              <div className="md:px-20">
                <p>
                  The Employment contract of an employee can be terminated by
                  the employee upon serving one month notice to the company
                  which must be served in person and must not be served in
                  absence or while on leave. The notice should only be served
                  one month earlier and not otherwise. If resignation letter is
                  not submitted at least 30 days earlier then the company may
                  not issue salary of current month and/or may not issue
                  experience certificate.
                </p>
                <br />
                <p>
                  In case of termination by the employer in an ordinary case the
                  employer can terminate the employment contract of an employee
                  upon serving one month notice to the employee. However, if
                  there is an issue of misconduct on the part of an employee, in
                  such a situation the employer may terminate the contract
                  without any notice.
                </p>
                <br />

                <p>
                  Employee under probation can be terminated for any reason any
                  time without prior notice.
                </p>
                <br />

                <p>
                  Before leaving the company, please make sure all the assets /
                  company property should be returned back to the concerned
                  authority in a proper condition. Further, you shall not harm
                  or misuse company accounts even after termination of
                  employment contract, in an agreement and light of Business
                  Law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CompanyPolicy;
