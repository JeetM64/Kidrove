import { Router, Request, Response } from 'express';
import { Enquiry } from '../models/Enquiry';

const router = Router();

// Validation helper functions
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone);
};

router.post('/enquiry', async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, phone } = req.body;

    // 1. Check if all required fields are present
    if (!name || !email || !phone) {
      res.status(400).json({
        success: false,
        message: 'All fields (name, email, phone) are required.',
      });
      return;
    }

    // Trim whitespace
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();

    // 2. Validate name length
    if (trimmedName.length < 2) {
      res.status(400).json({
        success: false,
        message: 'Name must be at least 2 characters long.',
      });
      return;
    }

    // 3. Validate Email format
    if (!isValidEmail(trimmedEmail)) {
      res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
      return;
    }

    // 4. Validate Phone format (10-digit number)
    if (!isValidPhone(trimmedPhone)) {
      res.status(400).json({
        success: false,
        message: 'Phone number must be a valid 10-digit number.',
      });
      return;
    }

    // 5. Create new enquiry in database
    const newEnquiry = new Enquiry({
      name: trimmedName,
      email: trimmedEmail,
      phone: trimmedPhone,
    });

    await newEnquiry.save();

    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully!',
      data: {
        id: newEnquiry._id,
        name: newEnquiry.name,
        email: newEnquiry.email,
        phone: newEnquiry.phone,
        createdAt: newEnquiry.createdAt,
      },
    });
  } catch (error) {
    console.error('Error saving enquiry:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.',
    });
  }
});

export default router;
