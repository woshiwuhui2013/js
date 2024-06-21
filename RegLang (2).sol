// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma abicoder v2;
import "@openzeppelin/contracts/utils/Strings.sol";
contract null_Contract {
    uint public marking = 2;
    uint public startedActivities = 0;
    address internal _worklist = address(0);
    event Event_0ez0dog_Message(string messageText);
    event execution_progress(string msg);
    struct ApplyForm {
        string name;
        string id;
        string mobilephone;
        string residentialAddress;
        uint loanAmount;
        uint loanAmountPermonth;
        uint loanMonths;
        string returningMethods;
        string cardId;
    }

    ApplyForm public _applyForm;
    mapping(string => bool) public _acceptedCompanyTypes;
    address public _bank;
    bool public _applyResult;
    struct CreditReport {
        uint delayTimes;
        uint queryTimes;
        uint creditCardNumber;
        uint realEstateNumber;
        string companyType;
        bool haveHousingFund;
    }

    CreditReport public _creditReport;
    bool public _reportResult;
    mapping(address => uint) public _balances;
    struct Agreement {
        string name;
        uint loanAmountPermonth;
        uint loanMonths;
    }

    Agreement public _agreement;
    uint public _acceptedLoanMonths = 36;

    constructor(address worklist) {
        _worklist = worklist;
        _acceptedCompanyTypes[unicode"国企"] = true;
        _acceptedCompanyTypes[unicode"事业单位"] = true;
        _acceptedCompanyTypes[unicode"外资"] = true;
        _acceptedCompanyTypes[unicode"私企"] = true;
        _acceptedCompanyTypes[unicode"个体"] = false;
        _acceptedCompanyTypes[unicode"无业"] = false;
    }

    event Activity_1bigitn_Message_ShowAgreement(Agreement agreement);
    function startExecution() public {
        require(marking == uint(2) && startedActivities == 0);
        step(uint(2), 0);
    }
    function InputApply_complete(
        uint elementIndex,
        ApplyForm memory applyForm
    ) external {
        uint tmpMarking = marking;
        uint tmpStartedActivities = startedActivities;
        if (elementIndex == uint(1)) {
            require(
                msg.sender == _worklist && tmpStartedActivities & uint(2) != 0
            );
            _applyForm = applyForm;
            step(tmpMarking | uint(4), tmpStartedActivities & ~uint(2));
            return;
        }
    }
    function InputReport_complete(
        uint elementIndex,
        CreditReport memory creditReport
    ) external {
        uint tmpMarking = marking;
        uint tmpStartedActivities = startedActivities;
        if (elementIndex == uint(2)) {
            require(
                msg.sender == _worklist && tmpStartedActivities & uint(4) != 0
            );
            _creditReport = creditReport;
            step(tmpMarking | uint(64), tmpStartedActivities & ~uint(4));
            return;
        }
    }
    function step(uint tmpMarking, uint tmpStartedActivities) internal {
        while (true) {
            if (tmpMarking & uint(18) != 0) {
                emit execution_progress("Activity_1c69yq9");
                null_Worklist(_worklist).InputApply_start(1);
                tmpMarking &= ~uint(18);
                tmpStartedActivities |= uint(2);
                continue;
            }
            if (tmpMarking & uint(288) != 0) {
                emit execution_progress("Activity_0g0wb4i");
                null_Worklist(_worklist).InputReport_start(2);
                tmpMarking &= ~uint(288);
                tmpStartedActivities |= uint(4);
                continue;
            }
            if (tmpMarking & uint(2048) != 0) {
                emit execution_progress("Activity_0qgssry");
                _applyResult =
                    (((((((true) && ((bytes(_applyForm.id).length == 18))) &&
                        ((bytes(_applyForm.mobilephone).length == 11))) &&
                        ((bytes(_applyForm.name).length != 0))) &&
                        ((bytes(_applyForm.cardId).length != 0))) &&
                        ((bytes(_applyForm.residentialAddress).length != 0))) &&
                        ((_applyForm.loanAmount >= 0))) &&
                    ((_applyForm.loanMonths >= _acceptedLoanMonths));
                tmpMarking = (tmpMarking & ~uint(2048)) | uint(8);
                continue;
            }
            if (tmpMarking & uint(8) != 0) {
                emit execution_progress("Gateway_043180a");
                tmpMarking &= ~uint(8);
                if (_applyResult == true) tmpMarking |= uint(32);
                else tmpMarking |= uint(16);
                continue;
            }
            if (tmpMarking & uint(64) != 0) {
                emit execution_progress("Activity_112kmpx");
                _reportResult =
                    ((((((true) && ((_creditReport.delayTimes <= 5))) &&
                        ((_creditReport.queryTimes <= 24))) &&
                        ((_creditReport.haveHousingFund == true))) &&
                        ((_creditReport.realEstateNumber >= 1))) &&
                        ((_creditReport.creditCardNumber <= 10))) &&
                    (
                        (_acceptedCompanyTypes[_creditReport.companyType] ==
                            true)
                    );
                tmpMarking = (tmpMarking & ~uint(64)) | uint(128);
                continue;
            }
            if (tmpMarking & uint(128) != 0) {
                emit execution_progress("Gateway_1v9ha07");
                tmpMarking &= ~uint(128);
                if (_reportResult == true) tmpMarking |= uint(512);
                else tmpMarking |= uint(256);
                continue;
            }
            if (tmpMarking & uint(512) != 0) {
                emit execution_progress("Activity_0ukxfi8");
                _agreement.name = _applyForm.name;

                _agreement.loanAmountPermonth = _applyForm.loanAmountPermonth;

                _agreement.loanMonths = _applyForm.loanMonths;
                tmpMarking = (tmpMarking & ~uint(512)) | uint(4096);
                continue;
            }
            if (tmpMarking & uint(8192) != 0) {
                emit execution_progress("Activity_0dh14c8");
                _balances[msg.sender] += _applyForm.loanAmount;

                _balances[_bank] -= _applyForm.loanAmount;
                tmpMarking = (tmpMarking & ~uint(8192)) | uint(1024);
                continue;
            }
            if (tmpMarking & uint(1024) != 0) {
                emit execution_progress("Event_0ez0dog");
                emit Event_0ez0dog_Message("LoanSuccess");
                tmpMarking &= ~uint(1024);
                if (
                    tmpMarking & uint(16382) == 0 &&
                    tmpStartedActivities & uint(3502) == 0
                ) {}
                continue;
            }
            if (tmpMarking & uint(4) != 0) {
                emit execution_progress("Activity_0pmagfr");
                _applyForm.loanAmountPermonth =
                    _applyForm.loanAmount /
                    _applyForm.loanMonths;
                tmpMarking = (tmpMarking & ~uint(4)) | uint(2048);
                continue;
            }
            if (tmpMarking & uint(4096) != 0) {
                emit execution_progress("Activity_1bigitn");
                emit Activity_1bigitn_Message_ShowAgreement(_agreement);
                tmpMarking = (tmpMarking & ~uint(4096)) | uint(8192);
                continue;
            }
            break;
        }
        if (marking != 0 || startedActivities != 0) {
            marking = tmpMarking;
            startedActivities = tmpStartedActivities;
        }
    }
}
contract null_Worklist {
    struct Workitem {
        uint elementIndex;
        address processInstanceAddr;
    }
    Workitem[] private workitems;

    // Events with the information to include in the Log when a workitem is registered
    event InputApply_Requested(uint index);
    event InputReport_Requested(uint index);
    function InputApply_start(uint elementIndex) external {
        workitems.push(Workitem(elementIndex, msg.sender));
        emit InputApply_Requested(workitems.length - 1);
    }
    function InputReport_start(uint elementIndex) external {
        workitems.push(Workitem(elementIndex, msg.sender));
        emit InputReport_Requested(workitems.length - 1);
    }
    function InputApply(
        uint workitemId,
        string memory applyForm_name,
        string memory applyForm_id,
        string memory applyForm_mobilephone,
        string memory applyForm_residentialAddress,
        uint applyForm_loanAmount,
        uint applyForm_loanAmountPermonth,
        uint applyForm_loanMonths,
        string memory applyForm_returningMethods,
        string memory applyForm_cardId
    ) external {
        require(
            workitemId < workitems.length &&
                workitems[workitemId].processInstanceAddr != address(0)
        );
        null_Contract(workitems[workitemId].processInstanceAddr)
            .InputApply_complete(
                workitems[workitemId].elementIndex,
                null_Contract.ApplyForm(
                    applyForm_name,
                    applyForm_id,
                    applyForm_mobilephone,
                    applyForm_residentialAddress,
                    applyForm_loanAmount,
                    applyForm_loanAmountPermonth,
                    applyForm_loanMonths,
                    applyForm_returningMethods,
                    applyForm_cardId
                )
            );
        workitems[workitemId].processInstanceAddr = address(0);
    }
    function InputReport(
        uint workitemId,
        uint creditReport_delayTimes,
        uint creditReport_queryTimes,
        uint creditReport_creditCardNumber,
        uint creditReport_realEstateNumber,
        string memory creditReport_companyType,
        bool creditReport_haveHousingFund
    ) external {
        require(
            workitemId < workitems.length &&
                workitems[workitemId].processInstanceAddr != address(0)
        );
        null_Contract(workitems[workitemId].processInstanceAddr)
            .InputReport_complete(
                workitems[workitemId].elementIndex,
                null_Contract.CreditReport(
                    creditReport_delayTimes,
                    creditReport_queryTimes,
                    creditReport_creditCardNumber,
                    creditReport_realEstateNumber,
                    creditReport_companyType,
                    creditReport_haveHousingFund
                )
            );
        workitems[workitemId].processInstanceAddr = address(0);
    }
}
